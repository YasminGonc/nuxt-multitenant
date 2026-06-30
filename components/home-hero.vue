<script setup>
const {data} = await useContent('home-hero@1');
</script>

<template>
  <ul v-if="data.content">
    <li><strong>Heading:</strong> {{ data.content.heading }}</li>
  </ul>
</template>