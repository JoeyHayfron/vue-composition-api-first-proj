<script setup>
const props = defineProps({
  resource: {
    type: String,
    default: 'Page'
  }
})
</script>
<template>
  <h1>Ooops</h1>
  <p>{{ props.resource }} not found</p>
</template>
