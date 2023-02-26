<template>
  <div class="search-property">
    <ContentContainer>
      <PropertySearch class="max-w-screen-xl px-20 py-10 m-auto rounded-2xl bg-white hover:drop-shadow-2xl" />
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
import ContentContainer from '@/components/shared/ContentContainer.vue';
import PropertySearch from '@/components/shared/property-search/index.vue'
</script>
