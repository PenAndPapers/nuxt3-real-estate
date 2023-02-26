<template>
  <div class="hero">
    <ContentContainer class="flex items-center gap-8">
      <div class="flex-1">
        <h1 class="mb-6 text-6xl">Helping you find the property of your dreams.</h1>
        <p class="mb-20 text-3xl">
          Creating quality urban lifestyles,building stronger communities
        </p>
        <button class="px-6 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg text-2xl font-bold">Learn more</button>
      </div>
      <div class="relative flex-1">
        <div class="rounded-tr-40% rounded-bl-40% overflow-hidden">
          <img class="big-image" src="https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="Hero image">
        </div>
        <div class="w-20 h-20 absolute left-3 -bottom-4 rounded-full bg-blue-700 z-10 drop-shadow-lg" />
      </div>
    </ContentContainer>
  </div>
</template>

<script setup>
import ContentContainer from '@/components/shared/ContentContainer.vue';
</script>
