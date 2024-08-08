<template>
  <div>
    <div>
      <a-input
        v-model:value="searchKey"
        @keyup.enter="triggerSearch"
        class="!border-none !h-[40px] !px-5"
        placeholder="Basic usage"
      >
        <template v-if="Boolean(searchKey.length)" #suffix
          ><CloseOutlined @click="triggerCancel"
        /></template>
        <template v-else #suffix><ClockCircleOutlined /></template>
      </a-input>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ClockCircleOutlined, CloseOutlined } from '@ant-design/icons-vue'
import { defineEmits, ref } from 'vue'
const searchKey = ref<string>('')
const triggerSearch = () => {
  if (searchKey.value.length >= 20) {
    ElMessage.error('Oops, this is a error message.')
    return
  }
  emit('search', searchKey.value)
}
const triggerCancel = () => {
  searchKey.value = ''
  emit('cancel')
}
const emit = defineEmits<{
  (e: 'search', value: string): void
  (e: 'cancel'): void
}>()
</script>
