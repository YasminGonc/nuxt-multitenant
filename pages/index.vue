<script setup lang="ts">
const {data} = useContent('home-hero');
</script>

<template>
    <main style="font-family: sans-serif; max-width: 40rem; margin: 3rem auto">
        <h1>Croct multi-tenant</h1>
        <pre>{{ data?.content }}</pre>
    </main>
</template>
