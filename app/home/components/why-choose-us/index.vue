<template>
  <div class="why-choose-us">
    <ContentContainer class="flex gap-32 items-center">
      <div class="flex-1 rounded-tr-40% rounded-bl-40% overflow-hidden">
        <img class="big-image" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
      </div>
      <Qualifications class="flex-1" />   
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
import ContentContainer from '@/components/shared/ContentContainer.vue';
import Qualifications from './Qualifications.vue';
</script>
