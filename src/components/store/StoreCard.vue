<template>
  <div class="bg-white rounded-[13px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-4 last:mb-0">
    <div class="h-[130px] w-full bg-red-500 rounded-t-[13px]"></div>
    <div class="py-[20px] px-[20px]">
      <div class="flex justify-between gap-3 items-start">
        <div class="flex flex-col">
          <a href="" class=""
            ><span class="break-all line-clamp-2">
              33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333</span
            ></a
          >
          <a href="" class=""
            ><span class="break-all line-clamp-1"
              >ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffff</span
            ></a
          >
        </div>
        <div class=""><HeartOutlined /></div>
      </div>

      <div class="flex justify-between mt-5">
        <a-button type="text" class="!flex !items-center">
          <template #icon><HeartOutlined /></template> Text Button</a-button
        >
        <a-button type="primary" class="!bg-[#D61F1F]">Primary Button</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { HeartOutlined } from '@ant-design/icons-vue'
</script>
