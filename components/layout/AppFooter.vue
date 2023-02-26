<template>
  <footer class="bg-blue-800">
    <ContentContainer>
      <div class="grid grid-rows-1 grid-cols-4 grid-flow-col gap-8">
        <div class="pr-8">
          <NuxtLink to="/" class="block mb-6 text-4xl font-bold text-white">Dee's Estate</NuxtLink>
          <p class="text-xl text-white">
            Solution for easy and flexible house hunting.You can trust us anywhere through this platform 
          </p>
        </div>
        <nav>
          <h1 class="mb-6 text-4xl font-bold text-white">Property</h1>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Learning Modules</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Partnership</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Watch demo</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Event </NuxtLink>
        </nav>
        <nav>
          <h1 class="mb-6 text-4xl font-bold text-white">About</h1>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Our Company</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Career </NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Investors Relations</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Social Impact</NuxtLink>
        </nav>
        <nav>
          <h1 class="mb-6 text-4xl font-bold text-white">Resources</h1>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Contact</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Give feedback</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">System status</NuxtLink>
          <NuxtLink to="/" class="block mb-6 text-xl text-white">Privacy Policy</NuxtLink>
        </nav>
      </div>
    </ContentContainer>
  </footer>
</template>

<script setup>
import ContentContainer from '@/components/shared/ContentContainer.vue';
</script>