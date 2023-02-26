<template>
  <div class="default-layout">
    <AppNavigation class="p-10 border-b border-gray-300" />
    <AppMain class="mx-auto">
      <slot />
    </AppMain>
    <AppFooter class="py-28" />
  </div>
</template>

<script setup>
import AppNavigation from '@/components/layout/AppNavigation'
import AppMain from '@/components/layout/AppMain'
import AppFooter from '@/components/layout/AppFooter'
</script>