<template>
  <div>
    <h1>About page</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>

<script setup>
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About page'  }
  ]
})
</script>