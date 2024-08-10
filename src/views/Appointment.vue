<template>
  <div class="app__custom--tour z-[1200] absolute top-[0px] w-[100vw] left-[-20px] mb-6">
    <el-space>
      <el-button
        :class="{ 'app__custom--tour-active': currentStep === 1 }"
        ref="ref1"
        text
        size="large"
        >Upload</el-button
      >
      <el-button
        :class="{ 'app__custom--tour-active': currentStep === 2 }"
        ref="ref2"
        text
        size="large"
        >Save</el-button
      >
      <el-button
        :class="{ 'app__custom--tour-active': currentStep === 3 }"
        ref="ref3"
        text
        size="large"
        >Save</el-button
      >
      <el-button
        :class="{ 'app__custom--tour-active': currentStep === 4 }"
        ref="ref4"
        text
        size="large"
        >Save</el-button
      >
    </el-space>
  </div>

  <el-tabs class="app__custom--tabs--appointment" v-model="activeName">
    <el-tab-pane name="1">
      <DetailAppointment @submit="handleNextStep" />
    </el-tab-pane>
    <el-tab-pane name="2">
      <FormAppointment @handlePrevStep="handlePrevStep" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import FormAppointment from '../components/appointment/FormAppointment.vue'
import DetailAppointment from '../components/appointment/DetailAppointment.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'

const activeName = ref('2')
const currentStep = ref(2)

const handleStepChange = (step: number) => {
  currentStep.value = step
}

const handleNextStep = (data: any) => {
  console.log(data)
  currentStep.value++
  activeName.value = String(currentStep.value)
}
const handlePrevStep = () => {
  currentStep.value--
  activeName.value = String(currentStep.value)
}
</script>
