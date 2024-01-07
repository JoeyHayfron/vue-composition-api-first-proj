<script setup>
defineProps({
  event: {
    required: true
  }
})
</script>

<template>
  <div v-if="event">
    <p>Edit event here</p>
  </div>
</template>

<style></style>
