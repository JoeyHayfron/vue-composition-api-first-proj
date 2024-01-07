<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import EventService from '@/services/EventServices'

const props = defineProps({
  id: {
    required: true
  }
})
const event = ref(null)

onMounted(() => {
  watchEffect(() => {
    EventService.getEvent(props.id)
      .then((response) => (event.value = response.data))
      .catch((err) => {
        console.log('Error Occurred')
        if (err.response && err.response.status === 404) {
          this.$router.push({ name: 'resource-not-found', params: { resource: 'Event' } })
        } else {
          this.$router.push({ name: 'network-error' })
        }
      })
  })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div>
      <RouterLink :to="{ name: 'event-details' }">Details</RouterLink> |
      <RouterLink :to="{ name: 'event-register' }">Register</RouterLink> |
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event" />
  </div>
</template>

<style></style>
