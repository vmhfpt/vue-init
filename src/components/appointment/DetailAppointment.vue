<template>
  <form @submit="onSubmit">
    <div class="app__custom--checkbox--input">
      <div class="mb-4 uppercase">
        <span>入庫の目的を選択してください。 </span>
      </div>

      <el-checkbox-group
        v-model="purposes"
        size="large"
        class="grid grid-cols-2 md:grid-cols-3 gap-[10px]"
      >
        <el-checkbox
          v-for="(item, index) in purposesCheckbox"
          :key="index"
          :label="item.title"
          :value="item.value"
          border
        />
      </el-checkbox-group>
      <ErrorMessage name="purposes" v-slot="{ message }">
        <p class="text-red-500 mt-2">{{ message }}</p>
      </ErrorMessage>
    </div>

    <div class="app__custom--checkbox--input mt-[50px]">
      <div class="mb-4 uppercase">
        <span> 交換したい部品や、気になる部品をすべて選択してください。</span>
      </div>

      <div class="mb-4 uppercase relative pl-2">
        <span
          class="after:content-[''] after:absolute after:h-full after:w-[3px] after:bg-red-500 after:top-0 after:left-0"
        >
          消耗品
        </span>
      </div>

      <el-checkbox-group
        v-model="consumables"
        size="large"
        class="grid grid-cols-2 md:grid-cols-3 gap-[10px]"
      >
        <el-checkbox
          v-for="(item, index) in consumablesCheckbox"
          :key="index"
          :label="item.title"
          :value="item.value"
          border
        />
      </el-checkbox-group>
      <ErrorMessage name="consumables" v-slot="{ message }">
        <p class="text-red-500 mt-2">{{ message }}</p>
      </ErrorMessage>
    </div>

    <div class="app__custom--checkbox--input mt-[30px]">
      <div class="mb-4 uppercase relative pl-2">
        <span
          class="after:content-[''] after:absolute after:h-full after:w-[3px] after:bg-red-500 after:top-0 after:left-0 text-[#494949]"
        >
          電装品
        </span>
      </div>

      <el-checkbox-group
        v-model="components"
        size="large"
        class="grid grid-cols-2 md:grid-cols-3 gap-[10px]"
      >
        <el-checkbox
          v-for="(item, index) in componetsCheckbox"
          :key="index"
          :label="item.title"
          :value="item.value"
          border
        />
      </el-checkbox-group>
      <ErrorMessage name="components" v-slot="{ message }">
        <p class="text-red-500 mt-2">{{ message }}</p>
      </ErrorMessage>
    </div>

    <div class="flex flex-col gap-3 mt-3">
      <el-button
        :class="
          !meta.valid
            ? '!w-full relative !bg-[#d61f1f85] !border-0'
            : '!w-full relative !bg-[#D61F1F] !border-0'
        "
        type="primary"
        native-type="submit"
      >
        <span>Next step</span>
        <div class="absolute h-full right-[10px] flex items-center">
          <el-icon><ArrowRight /></el-icon>
        </div>
      </el-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { Form, ErrorMessage, useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { schemaDetailAppointment } from '../../schemas/appointment/appointmentSchema'
import {
  componetsCheckbox,
  consumablesCheckbox,
  purposesCheckbox
} from '../../schemas/appointment/checkboxType'
import { defineProps, defineEmits } from 'vue'
const emit = defineEmits(['submit'])
const { handleSubmit, meta } = useForm({
  validationSchema: toTypedSchema(schemaDetailAppointment),
  initialValues: {
    consumables: [],
    components: [],
    purposes: []
  }
})
const { value: consumables } = useField('consumables')
const { value: components } = useField('components')
const { value: purposes } = useField('purposes')

const onSubmit = handleSubmit((validatedValues) => {
  emit('submit', validatedValues)
})
</script>
