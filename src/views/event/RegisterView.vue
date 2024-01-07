<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const event = defineProps({
  event: {
    required: true
  }
})
const GStore = inject('GStore')

const register = () => {
  GStore.flashMessage = 'Registration successful'

  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({ name: 'event-details' })
}
</script>

<template>
  <div v-if="event">
    <p>Register for event here</p>
    <button @click="register">Register</button>
  </div>
</template>

<style></style>
