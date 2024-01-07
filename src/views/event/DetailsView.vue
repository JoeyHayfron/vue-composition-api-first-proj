<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <h2>{{ props.event.description }}</h2>
  <p>@ {{ props.event.time }} on {{ props.event.date }}</p>
</template>
