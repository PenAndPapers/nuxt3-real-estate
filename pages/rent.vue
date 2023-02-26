<template>
  <div class="rent">
    <ContentContainer class="my-24">
      <PropertySearch class="px-20 py-10 m-auto rounded-2xl bg-white hover:drop-shadow-2xl" />
    </ContentContainer>
    <ContentContainer class="mb-4">
      <p class="font-semibold">Results: 15 of 302</p>
    </ContentContainer>
    <ContentContainer class="grid grid-cols-3 gap-12 mb-24">
      <PropertyCard class="pt-3 px-8 pb-8" :property="property" v-for="(property, index) in properties" :key="index" />
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
import { usePageSeo } from '@/composable/usePageSeo';
import ContentContainer from '@/components/shared/ContentContainer.vue';
import PropertySearch from '@/components/shared/property-search/index.vue'
import PropertyCard from '@/components/shared/PropertyCard.vue'

usePageSeo('Rent', 'Rent page')

const properties = reactive([
  {
    name: 'Houseonus',
    address: 'Barcelona, Spain',
    type: 'Duplex',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Propel House',
    address: 'Dublin, Ireland',
    type: 'Duplex',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Measured',
    address: 'Auckland, New Zealand',
    type: 'Duplex',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Vanity House',
    address: 'Barcelona, Spain',
    type: 'Duplex',
    price: 20500,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Emporium',
    address: 'Dublin, Ireland',
    type: 'Duplex',
    price: 25500,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Society Heights',
    address: 'Auckland, New Zealand',
    type: 'Duplex',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Momentum',
    address: 'Barcelona, Spain',
    type: 'Duplex',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Link Arc',
    address: 'Dublin, Ireland',
    type: 'Duplex',
    price: 17000,
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Enterprise',
    address: 'Auckland, New Zealand',
    type: 'Duplex',
    price: 14000,
    image: 'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Key House',
    address: 'Barcelona, Spain',
    type: 'Duplex',
    price: 21000,
    image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Spire Brach',
    address: 'Dublin, Ireland',
    type: 'Duplex',
    price: 19000,
    image: 'https://images.unsplash.com/photo-1633330977020-2bdfb8530cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Ally House',
    address: 'Auckland, New Zealand',
    type: 'Duplex',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Unison House',
    address: 'Barcelona, Spain',
    type: 'Duplex',
    price: 33000,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Hunt',
    address: 'Dublin, Ireland',
    type: 'Duplex',
    price: 27000,
    image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Synergist',
    address: 'Auckland, New Zealand',
    type: 'Duplex',
    price: 21500,
    image: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  }
])
</script>