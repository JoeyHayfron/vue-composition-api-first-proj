<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventServices'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const events = ref(null)
const totalEvents = ref(0)
const router = useRouter()

const props = defineProps({
  pageNumber: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.pageNumber)
const hasNextPage = computed(() => {
  return Math.ceil(totalEvents.value / 2) > page.value
})

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((err) => {
        router.push({ name: 'network-error' })
      })
  })
})
</script>

<template>
  <main id="wrapper">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <RouterLink :to="{ name: 'event-list', query: { page: page - 1 } }" v-if="page > 1">
      &#8249; Prev
    </RouterLink>
    <RouterLink :to="{ name: 'event-list', query: { page: page + 1 } }" v-if="hasNextPage">
      Next &#8250;
    </RouterLink>
  </main>
</template>

<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
