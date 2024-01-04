<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventServices'

const props = defineProps({
  id: {
    required: true
  }
})
const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => (event.value = response.data))
    .catch((err) => console.log('Error Occurred'))
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <h2>{{ event.description }}</h2>
    <p>@ {{ event.time }} on {{ event.date }}</p>
  </div>
</template>

<style></style>
