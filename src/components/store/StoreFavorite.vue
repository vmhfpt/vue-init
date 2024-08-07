<template>
  <div ref="scrollContainer" class="h-[70vh] overflow-y-scroll">
    <StoreCard v-for="item in items" :key="item.id" />
    <div v-if="isLoading" class="loading"><h1>loading</h1></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import StoreCard from '../../components/store/StoreCard.vue'
import { useInfiniteScroll } from '@vueuse/core'
const isLoading = ref(false)
const scrollContainer = ref<HTMLElement | null>(null) // you still do not set <div ref="scrollContainer"> in here
const items = ref<{ id: number; text: string }[]>([])
const fetchMoreItems = async () => {
  isLoading.value = true
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const newItems = Array.from({ length: 10 }, (_, index) => ({
    id: items.value.length + index + 1,
    text: `Item ${items.value.length + index + 1}`
  }))
  items.value.push(...newItems)
  isLoading.value = false
}

useInfiniteScroll(scrollContainer, fetchMoreItems, {
  distance: 50 // Trigger when 50px away from bottom
})

// Initial load
fetchMoreItems()
</script>
