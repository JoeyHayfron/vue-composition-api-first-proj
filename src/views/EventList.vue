<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventServices'
import { ref, onMounted } from 'vue'

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => (events.value = response.data))
    .catch((err) => console.log('Error Occurred'))
})
</script>

<template>
  <main id="wrapper">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </main>
</template>

<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
