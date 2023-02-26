<template>
  <div class="row-title ">
    <h2 class="text-5xl font-bold text-blue-800">{{ title }}</h2>
    <p class="mt-4 text-3xl font-normal">{{ subTitle }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    subTitle: String
  })
</script>