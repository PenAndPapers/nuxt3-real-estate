<template>
  <div class="auth-layout">
    <AppNavigation class="p-3 border-b border-gray-100" />
    <AppMain class="max-w-screen-xl mx-auto my-4">
      <slot />
    </AppMain>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavigation from '@/components/layout/AppNavigation'
import AppMain from '@/components/layout/AppMain'
import AppFooter from '@/components/layout/AppFooter'
</script>