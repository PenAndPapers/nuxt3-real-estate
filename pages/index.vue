<template>
  <div class="home">
    <HomeHero class="py-36" />
    <SearchProperty class="mb-32" />
    <HowItWorks class="mb-72" />
    <WhyChooseUs class="mb-72" />
    <FeatureProperties class="mb-72" />
    <Testimonials class="mb-72" />
  </div>
</template>

<script setup>
import HomeHero from '@/app/home/components/home-hero'
import SearchProperty from '@/app/home/components/search-property'
import HowItWorks from '@/app/home/components/how-it-works'
import WhyChooseUs from '@/app/home/components/why-choose-us'
import FeatureProperties from '@/app/home/components/featured-properties'
import Testimonials from '@/app/home/components/testimonials'

useHead({
  title: 'Dee\'s Estate: Home',
  meta: [
    { name: 'description', content: 'Home page'  }
  ]
})


const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
</script>
