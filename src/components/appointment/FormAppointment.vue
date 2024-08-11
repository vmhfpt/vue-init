<template>
  <div class="pb-5">
    <div class="mb-4">
      <span class="text-[#333333]">希望来店日時を第3希望まで選択してください。</span>
    </div>
    <div
      class="font-[500] h-[40px] flex justify-center items-center w-full border-solid border-[#D61F1F] border-[1px] text-[#D61F1F]"
    >
      <span>作業目安時間：180分〜</span>
    </div>
  </div>

  <form @submit="onSubmit">
    <div class="my-5" v-for="(field, index) in fields" :key="field.key">
      <div class="relative pl-2 mb-5">
        <div
          class="text-[#494949] text-[12px] font-[700] after:content-[''] after:absolute after:h-full after:w-[3px] after:bg-red-500 after:top-[-2px] after:left-0"
        >
          {{ field.value.name }}
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <span class="text-[#494949] text-[12px] font-[500]">日付</span>
          <a-date-picker
            class="app__custom-date-picker"
            size="large"
            @change="() => onDateChange(index, field.value)"
            v-model:value="field.value.date"
            placeholder="日付を選択してください"
            format="YYYY-MM-DD"
            valueFormat="YYYY-MM-DD"
            :disabledDate="disabledDate"
            :suffixIcon="
              h(CalendarOutlined, {
                style: {
                  fontSize: '14px',
                  color: '#666666'
                }
              })
            "
          />
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-[#494949] text-[12px] font-[500]">時間</span>
          <a-time-picker
            :disabled="!field.value.date"
            class="app__custom-date-picker"
            size="large"
            v-model:value="field.value.time"
            format="HH:mm"
            valueFormat="HH:mm"
            placeholder="時間枠を選択してください"
            :disabledHours="() => handleDisabledHours(field.value.date)"
            :disabledMinutes="(hour: any) => handleDisabledMinutes(hour, field.value.date)"
            :suffixIcon="
              h(ClockCircleOutlined, {
                style: {
                  fontSize: '14px',
                  color: '#666666'
                }
              })
            "
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <el-button
        native-type="submit"
        class="!w-full relative !bg-[#D61F1F] !border-0"
        type="primary"
      >
        <span>Next step</span>
        <div class="absolute h-full right-[10px] flex items-center">
          <el-icon><ArrowRight /></el-icon>
        </div>
      </el-button>
      <el-button
        native-type="button"
        class="!w-full relative !ml-0 !bg-[#F4F4F4] !text-red-500"
        @click="emit('handlePrevStep')"
        type="primary"
        style="border-color: red"
      >
        <span>Prev step</span>
        <div class="absolute h-full right-[10px] flex items-center">
          <el-icon><ArrowRight /></el-icon>
        </div>
      </el-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { ref, h } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { useForm, useFieldArray, useField } from 'vee-validate'
import { ArrowRight } from '@element-plus/icons-vue'
import { ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons-vue'
import { disabledDate, disabledHours, disabledMinutes } from '../../utils/date/date'
import { schemaSchedule } from '../../schemas/appointment/appointmentSchema'
import { watch, nextTick } from 'vue'
interface Schedule {
  name: string
  date: Date | null
  time: string | null
}

const emit = defineEmits(['handlePrevStep'])
const selectedDate = ref(null)
const selectedTime = ref(null)
const { handleSubmit, setFieldValue, values } = useForm({
  validationSchema: toTypedSchema(schemaSchedule),
  initialValues: {
    schedules: [
      { name: '第1希望', date: null, time: null },
      { name: '第2希望', date: null, time: null },
      { name: '第3希望', date: null, time: null }
    ]
  }
})

const { fields, update } = useFieldArray<Schedule>('schedules')
const handleDisabledHours = (selectedDate: any) => {
  return disabledHours(selectedDate)
}
const handleDisabledMinutes = (hours: number, selectedDate: any) => {
  return disabledMinutes(selectedDate, hours)
}
const onDateChange = (id: number, field: Schedule) => {
  nextTick(() => {
    setFieldValue(`schedules.${id}.time`, null) // Make the update in the next tick
  })
  // alert(id)
  // setFieldValue(`schedules.${id}.date`, null)
  // setTimeout(() => {
  //   alert('set')
  //   setFieldValue(`schedules.${id}.date`, null)
  // }, 1000)
  //setFieldValue(`schedules.${id}.date`, null)
}
const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
})
</script>
