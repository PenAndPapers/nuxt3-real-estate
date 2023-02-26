<template>
  <article class="how-it-works-card bg-white hover:drop-shadow-2xl">
    <div class="h-36 flex items-center mb-8">
      <img :src="work.image" :alt="work.title" class="text-center m-auto" >
    </div>
    <h2 class="mb-4 text-4xl font-semibold text-center">{{ work.title }}</h2>
    <p class="text-center text-2xl font-normal">{{ work.description }}</p>
  </article>
</template>

<script setup lang="ts">
import { Work } from '@/app/home/models'

const props = defineProps<{
  work: Work
}>()
</script>