<template>
  <div class="dropdown">
    <a class="flex items-center text-2xl font-semibold text-blue-800 hover:cursor-pointer" tabindex="0">
      <span>{{ title }}</span>
      <svg class="ml-2" width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.27 0.72998L0.5 2.49998L10.5 12.5L20.5 2.49998L18.73 0.72998L10.5 8.95998L2.27 0.72998Z" fill="#0F298B"/>
      </svg>
    </a>
    <p class="text-xl">Lekki</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  options: Array
})

const selected = reactive({})
</script>
