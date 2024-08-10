<template>
  <a-date-picker v-model:value="value1" />

  <a-select ref="select" :options="options1"></a-select>

  <div class="flex flex-col gap-3">
    <el-button class="!w-full relative !bg-[#D61F1F] !border-0" type="primary">
      <span>Next step</span>
      <div class="absolute h-full right-[10px] flex items-center">
        <el-icon><ArrowRight /></el-icon>
      </div>
    </el-button>
    <el-button
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('')
const emit = defineEmits(['handlePrevStep'])
import { ArrowRight } from '@element-plus/icons-vue'
import type { SelectProps } from 'ant-design-vue'
const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack'
  },
  {
    value: 'lucy',
    label: 'Lucy'
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe'
  }
])
</script>
