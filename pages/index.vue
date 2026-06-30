<script setup lang="ts">
const croct = useCroct();

const track = () =>
  croct.track("goalCompleted", {
    goalId: "signup",
  });

const { data } = useContent("home-hero", {
  fallback: {
    heading: "Meu fallback",
  },
});
</script>

<template>
  <main style="font-family: sans-serif; max-width: 40rem; margin: 3rem auto">
    <h1>Croct multi-tenant</h1>
    <ul v-if="data.content">
      <li><strong>Heading:</strong> {{ data.content.heading }}</li>
    </ul>
    <button @click="track">Trigger</button>
  </main>
</template>
