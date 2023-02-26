<template>
  <header>
    <ContentContainer>
      <nav class="flex justify-between items-center">
        <NuxtLink class="text-4xl font-bold font-['Oleo_Script']">Dee's Estate</NuxtLink>
        <div>
          <NuxtLink to="/" class="mr-8 text-2xl hover:font-semibold hover:text-blue-800">Home</NuxtLink>
          <NuxtLink to="/rent" class="mr-8 text-2xl hover:font-semibold hover:text-blue-800">Rent</NuxtLink>
          <a to="#" class="mr-8 text-2xl hover:font-semibold hover:text-blue-800">Land</a>
          <a to="#" class="mr-8 text-2xl hover:font-semibold hover:text-blue-800">Agent</a>
          <NuxtLink to="/contact-us" class="text-2xl hover:font-semibold hover:text-blue-800">Contact Us</NuxtLink>
        </div>
        <div>
          <button class="px-6 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg text-2xl font-bold">Get Started</button>
        </div>
      </nav>
    </ContentContainer>
  </header>
</template>

<script setup lang="ts">
import ContentContainer from '@/components/shared/ContentContainer.vue';
</script>