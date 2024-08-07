<template>
  <div>
    <div>
      <a-input class="!border-none !h-[40px] !px-5" placeholder="Basic usage">
        <template #suffix><ClockCircleOutlined /></template>
      </a-input>
    </div>
    <div class="app__tab--custom">
      <a-tabs :animated="true" v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Tab 1"> <StoreFavorite /> </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render
          >// this content here is a component</a-tab-pane
        >
        <a-tab-pane key="3" tab="Tab 3">// this content here is a component</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import StoreFavorite from '../components/store/StoreFavorite.vue'

const activeKey = ref('1')
const center = { lat: 35, lng: -95 }
const sayHi = () => alert('Hi!')
</script>
