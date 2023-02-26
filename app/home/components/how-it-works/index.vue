<template>
  <div class="how-it-works">
    <ContentContainer>
      <RowTitle class="text-center" title="How it works." sub-title="This is how our products works" />
      <div class="grid grid-cols-3 gap-10 mt-20">
        <WorkCard class="px-12 py-24" :work="work" v-for="(work, index) in works" :key="index" />
      </div>
    </ContentContainer>
  </div>
</template>

<script setup>
import ContentContainer from '@/components/shared/ContentContainer.vue';
import RowTitle from '@/components/shared/RowTitle.vue';
import WorkCard from './WorkCard.vue';

const works = computed(() => [
  {
    title: 'Find Home',
    description: 'Our properties are located at prime areas where by there won\’t be problem with transportation',
    image: '/images/find_home.svg'
  },
  {
    title: 'Make payments',
    description: 'Our estates comes with good network,portable water , 24hrs light and round the clock security.',
    image: '/images/make_payments.svg'
  },
  {
    title: 'Make it Official',
    description: 'We have been in business for over 32 years,for client outside the country you can trust  us to deliver well.',
    image: '/images/make_it_official.svg'
  }
])
</script>
