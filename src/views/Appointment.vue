<template>
  <div class="app__custom--tour z-[1200] absolute top-[0px] w-[100vw] left-[-20px] mb-6">
    <el-space>
      <el-button
        class="!text-[12px]"
        :class="{ 'app__custom--tour-active': activeKey === '1' }"
        ref="ref1"
        text
        size="large"
        >目的選択</el-button
      >
      <el-button
        class="!text-[12px]"
        :class="{ 'app__custom--tour-active': activeKey === '2' }"
        ref="ref2"
        text
        size="large"
        >日時選択</el-button
      >
      <el-button
        class="!text-[12px]"
        :class="{ 'app__custom--tour-active': activeKey === '3' }"
        ref="ref3"
        text
        size="large"
        >確認</el-button
      >
      <el-button
        class="!text-[12px]"
        :class="{ 'app__custom--tour-active': activeKey === '4' }"
        ref="ref4"
        text
        size="large"
        >完了</el-button
      >
    </el-space>
  </div>

  <div class="app__custom--tabs--appointment">
    <a-tabs v-model:activeKey="activeKey" animated>
      <a-tab-pane key="1" tab="Tab 1">
        <DetailAppointment @submit="handleNextStep" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">
        <FormAppointment @handlePrevStep="handlePrevStep"
      /></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import FormAppointment from '../components/appointment/FormAppointment.vue'
import DetailAppointment from '../components/appointment/DetailAppointment.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
const activeKey = ref('1')

const handleNextStep = (data: any) => {
  console.log(data)
  activeKey.value = String(Number(activeKey.value) + 1)
}
const handlePrevStep = () => {
  activeKey.value = String(Number(activeKey.value) - 1)
}
</script>
