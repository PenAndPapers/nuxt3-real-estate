<template>
  <div class="testimonials">
    <ContentContainer>
      <RowTitle class="text-center" title="Testimonials." sub-title="This is what our client are saying" />
      <div class="grid grid-cols-3 gap-20 mt-20">
        <TestimonialCard class="p-4" :testimonial="testimonial" v-for="(testimonial, index) in testimonials" :key="index" />
      </div>
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
import ContentContainer from '@/components/shared/ContentContainer.vue';
import RowTitle from '@/components/shared/RowTitle.vue';
import TestimonialCard from './TestimonialCard.vue';

const testimonials = computed(() => [
  {
    name: 'Harry Anthony',
    address: 'Sydney, Australia',
    testimonial: 'Aliqua aliquip eiusmod non proident adipisicing anim culpa velit duis ullamco aliquip excepteur. Ipsum deserunt qui esse nisi mollit deserunt laborum do do sint esse deserunt culpa. Fugiat non occaecat irure id velit in sint duis.'
  },
  {
    name: 'Jean Andrea Roberts',
    address: 'Berlin, Germany',
    testimonial: 'Deserunt laboris in id irure qui exercitation amet enim excepteur exercitation consectetur occaecat esse nulla. Eu ut esse est duis elit nostrud qui mollit. In ad culpa fugiat labore mollit ex.'
  },
  {
    name: 'Robert Livingston',
    address: 'California, USA',
    testimonial: 'Magna incididunt in mollit incididunt adipisicing adipisicing fugiat eu magna. Amet sunt aliqua velit incididunt consequat incididunt labore Lorem commodo id officia cupidatat non. Voluptate id nulla incididunt sit nulla esse reprehenderit fugiat. Labore ipsum ut duis dolore adipisicing laborum ex.'
  }
])
</script>
