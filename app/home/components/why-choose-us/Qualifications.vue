<template>
  <div class="qualifications">
    <RowTitle class="mb-8" title="Why you should choose us." sub-title="Creating quality urban lifestyles,building stronger communities" />
    <ul class="qualities flex flex-wrap">
      <li class="mb-4 w-1/2" v-for="(quality, index) in qualities" :key="index">
        <Quality :title="quality" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import RowTitle from '@/components/shared/RowTitle.vue';
import Quality from './Quality.vue';

const qualities = reactive([
  'World class',
  'Affordable',
  'Trusted',
  'Amenities'
])
</script>
