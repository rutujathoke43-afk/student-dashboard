<script setup>
defineProps({
  title: String,
  value: String,
  description: String
})
</script>

<template>
  <section class="card">
    <h2>{{ title }}</h2>
    <strong>{{ value }}</strong>
    <p>{{ description }}</p>
  </section>
</template>