<template>
  <article class="property-card bg-white hover:drop-shadow-2xl rounded-tr-3xl rounded-bl-3xl">
    <div class="h-60 rounded-tr-40% rounded-bl-40% overflow-hidden bg-blue-800 ">
      <img :src="property.image" :alt="property.name" class="m-auto text-center" >
    </div>
    
    <div class="flex justify-between mt-4">
      <div class="mr-4">
        <h2 class="text-2xl font-semibold">{{ property.name }}</h2>
        <p class="text-xl">{{ property.address }}</p>
      </div>
      <div class="text-right">
        <p class="text-xl">{{ property.type }}</p>
        <p class="text-xl font-semibold text-blue-800">${{ price }}</p>
      </div>
    </div>
    
  </article>
</template>

<script setup lang="ts">
import { Property } from '@/app/home/models'

const props = defineProps<{
  property: Property
}>()

const price = computed(() => {
  return props.property.price.toLocaleString("en-US")
})
</script>