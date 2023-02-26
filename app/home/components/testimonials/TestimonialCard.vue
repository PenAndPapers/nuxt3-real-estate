<template>
  <article class="testimonial-card bg-white hover:drop-shadow-2xl rounded-2xl">
    <h2 class="text-3xl">{{ testimonial.name }}</h2>
    <p class="mt-4 text-xl">{{ testimonial.address }}</p>
    <p class="mt-6 text-xl">{{ testimonial.testimonial }}</p>
  </article>
</template>

<script setup lang="ts">
import { Testimonial } from '@/app/home/models'

const props = defineProps<{
  testimonial: Testimonial
}>()
</script>