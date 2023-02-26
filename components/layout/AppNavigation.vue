<template>
  <header>
    <ContentContainer>
      <nav class="flex justify-between items-center">
        <NuxtLink to="/" class="text-4xl font-bold">Dee's Estate</NuxtLink>
        <div>
          <NuxtLink to="/" class="mr-8 text-2xl">Home</NuxtLink>
          <NuxtLink to="/rent" class="mr-8 text-2xl">Rent</NuxtLink>
          <NuxtLink to="/" class="mr-8 text-2xl">Land</NuxtLink>
          <NuxtLink to="/" class="mr-8 text-2xl">Agent</NuxtLink>
          <NuxtLink to="/contact-us" class="text-2xl">Contact Us</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/" class="px-6 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg text-2xl font-bold">Get Started</NuxtLink>
        </div>
      </nav>
    </ContentContainer>
  </header>
</template>

<script setup lang="ts">
import ContentContainer from '@/components/shared/ContentContainer.vue';
</script>