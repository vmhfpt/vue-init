<template>
  <div v-if="firstLoading"><h1>First loading</h1></div>

  <div class="relative">
    <div class="absolute top-[-100px] w-full">
      <SearchInput @search="handleSearch" @cancel="cancelSearch" />
    </div>
    <div
      v-if="!firstLoading"
      v-infinite-scroll="fetchMoreItems"
      :infinite-scroll-disabled="isLoading"
      :infinite-scroll-distance="10"
      ref="scrollContainer"
      class="h-[70vh] overflow-y-scroll"
    >
      <StoreCard v-for="item in items" :key="item.id" />
      <div v-if="isLoading" class="loading"><a-spin :indicator="indicator" /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchInput from '../../components/store/SearchInput.vue'
import { ref, onMounted, reactive } from 'vue'
import StoreCard from '../../components/store/StoreCard.vue'

import { LoadingOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: '24px',
    color: 'red'
  },
  spin: true
})
const pageCurrent = ref(1)
const search = reactive({
  isSearch: false,
  key: ''
})

const searchRef = ref(search)
const firstLoading = ref(true)
const isLoading = ref(false)
const scrollContainer = ref<HTMLElement | null>(null)
const items = ref<{ id: number }[]>([])
const fetchMoreItems = async () => {
  if (searchRef.value.isSearch) {
    console.log(
      `get more item paginate through key search = ${searchRef.value.key} and page = ${pageCurrent.value}`
    )
  } else {
    console.log(`get more item paginate page = ${pageCurrent.value}`)
  }
  pageCurrent.value++
  isLoading.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const newItems = Array.from({ length: 5 }, (_, index) => ({
    id: items.value.length + index + 1
  }))
  items.value.push(...newItems)
  isLoading.value = false
}

const handleSearch = (key: string) => {
  items.value = []
  searchRef.value.isSearch = true
  searchRef.value.key = key
  pageCurrent.value = 1
  fetchMoreItems()
}

const cancelSearch = async () => {
  searchRef.value.isSearch = false
  pageCurrent.value = 1
  firstLoading.value = true
  await getData(1)
  firstLoading.value = false
}
const getData = async (page: number) => {
  console.log('init data do not search with page = ', page)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const newItems = Array.from({ length: 5 }, (_, index) => ({
    id: items.value.length + index + 1
  }))
  items.value = newItems
  pageCurrent.value++
}

onMounted(() => {
  const initialize = async () => {
    await getData(1)
    firstLoading.value = false
  }

  initialize()
})
</script>
