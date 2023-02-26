<template>
  <div class="featured-properties">
    <ContentContainer>
      <RowTitle class="text-center mb-8" title="Our Featured Properties." sub-title="One of our biggest product to be featured and that has sold out the most." />
      <div class="text-right">
        <NuxtLink to="/rent" class="mb-8 px-10 py-3 inline-block bg-blue-700 hover:bg-blue-600 text-white rounded-xl text-xl">View more</NuxtLink>
      </div>
      <div class="grid grid-cols-3 gap-24">
        <FeatureCard class="pt-3 px-8 pb-8" :feature-property="property" v-for="(property, index) in properties" :key="index" />
      </div>
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
import ContentContainer from '@/components/shared/ContentContainer.vue';
import RowTitle from '@/components/shared/RowTitle.vue';
import FeatureCard from './FeatureCard.vue';

const properties = computed(() => [
  {
    name: 'Sea Side View',
    address: 'Barcelona, Spain',
    type: 'Duplex',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Arc Heights',
    address: 'Dublin, Ireland',
    type: 'Duplex',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w500&q=80'
  },
  {
    name: 'Luxury Avenue',
    address: 'Auckland, New Zealand',
    type: 'Duplex',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  }
])
</script>
