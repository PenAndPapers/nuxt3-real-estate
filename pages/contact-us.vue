<template>
  <div class="contact-us">
    <ContentContainer class="flex items-center mt-24 mb-32 gap-16">
      <div class="flex-1">
        <img src="https://images.unsplash.com/photo-1565347878188-d5a035536f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="https://unsplash.com/@christianw">
      </div>
      <div class="flex-1">
        <RowTitle class="mb-12" title="Get in touch" sub-title="Enim culpa labore aute sunt pariatur duis ad. Dolor incididunt qui tempor reprehenderit labore officia deserunt ex ullamco culpa."/>
        <ContactForm />
      </div>
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
import { usePageSeo } from '@/composable/usePageSeo';
import ContentContainer from '@/components/shared/ContentContainer.vue';
import RowTitle from '@/components/shared/RowTitle.vue';
import ContactForm from '@/app/contact-us/components/contact-form/index.vue';

usePageSeo('Contact us', 'Contact us page')
</script>
