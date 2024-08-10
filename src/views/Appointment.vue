<template>
  <div class="app__custom--tour z-[1200] absolute top-[0px] w-[100vw] left-[-20px]">
    <div>
      <el-space>
        <el-button
          :class="{ 'app__custom--tour-active': currentStep === 0 }"
          ref="ref1"
          text
          size="large"
          >Upload</el-button
        >
        <el-button
          :class="{ 'app__custom--tour-active': currentStep === 1 }"
          ref="ref2"
          text
          size="large"
          >Save</el-button
        >
        <el-button
          :class="{ 'app__custom--tour-active': currentStep === 2 }"
          ref="ref3"
          text
          size="large"
          >Save</el-button
        >
        <el-button
          :class="{ 'app__custom--tour-active': currentStep === 3 }"
          ref="ref4"
          text
          size="large"
          >Save</el-button
        >
      </el-space>
    </div>

    <div>
      <el-tour
        :current="currentStep"
        v-model="open"
        :show-close="false"
        :mask="false"
        @change="handleStepChange"
      >
        <el-tour-step :target="ref1?.$el" title="">
          <DetailAppointment
            :meta="meta"
            :consumables="consumables"
            :components="components"
            :purposes="purposes"
            :onSubmit="onSubmit"
          />
        </el-tour-step>

        <el-tour-step :target="ref2?.$el" title="Upload File 2">
          <div class="flex flex-col gap-3">
            <el-button
              class="!w-full relative !bg-[#D61F1F] !border-0"
              @click="handleNextStep"
              type="primary"
            >
              <span>Next Step</span>
              <div class="absolute h-full right-[10px] flex items-center">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </el-button>
            <el-button
              class="!w-full relative !ml-0 !bg-[#F4F4F4] !text-red-500"
              @click="handlePrevStep"
              type="primary"
              style="border-color: red"
            >
              <span>Prev step</span>
              <div class="absolute h-full right-[10px] flex items-center">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </el-button>
          </div>
        </el-tour-step>
        <el-tour-step :target="ref3?.$el" title="Upload File 3">
          <div class="flex flex-col gap-3">
            <el-button
              class="!w-full relative !bg-[#D61F1F] !border-0"
              @click="handleNextStep"
              type="primary"
            >
              <span>Next step</span>
              <div class="absolute h-full right-[10px] flex items-center">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </el-button>
            <el-button
              class="!w-full relative !ml-0 !bg-[#F4F4F4] !text-red-500"
              @click="handlePrevStep"
              type="primary"
              style="border-color: red"
            >
              <span>Prev step</span>
              <div class="absolute h-full right-[10px] flex items-center">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </el-button>
          </div>
        </el-tour-step>
        <el-tour-step :target="ref4?.$el" title="Upload File 4">
          <div class="flex flex-col gap-3">
            <el-button class="!w-full relative !bg-[#D61F1F] !border-0" type="primary">
              <span>Finish</span>
              <div class="absolute h-full right-[10px] flex items-center">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </el-button>
            <el-button
              class="!w-full relative !ml-0 !bg-[#F4F4F4] !text-red-500"
              @click="handlePrevStep"
              type="primary"
              style="border-color: red"
            >
              <span>Prev Step</span>
              <div class="absolute h-full right-[10px] flex items-center">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </el-button>
          </div>
        </el-tour-step>
      </el-tour>
    </div>
  </div>
</template>

<script setup lang="ts">
import DetailAppointment from '../components/appointment/DetailAppointment.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { ButtonInstance } from 'element-plus'
import { Form, Field, ErrorMessage, useForm, useFieldArray, useField } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { reactive } from 'vue'
import { schemaDetailAppointment } from '../schemas/appointment/appointmentSchema'
import {
  componetsCheckbox,
  consumablesCheckbox,
  purposesCheckbox
} from '../schemas/appointment/checkboxType'
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
  console.log('Submitted values:', validatedValues)
})

const currentStep = ref(0)
const ref1 = ref<ButtonInstance>()
const ref2 = ref<ButtonInstance>()
const ref3 = ref<ButtonInstance>()
const ref4 = ref<ButtonInstance>()
const open = ref(true)

const handleStepChange = (step: number) => {
  currentStep.value = step
}

const handleNextStep = () => {
  currentStep.value++
}
const handlePrevStep = () => {
  currentStep.value--
}
</script>
