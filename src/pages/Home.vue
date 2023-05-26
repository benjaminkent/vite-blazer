<template>
  <div class="flex flex-col items-center gap-8 bg-gray-900 h-screen pt-28">
    <VueLogo class="text-4xl" />
    <h1 class="text-vue-green text-xl font-bold">{{ demoState.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDemoStore } from '../stores/demo';
import VueLogo from '../assets/vue-logo.svg?component';

const { demoState } = storeToRefs(useDemoStore());
</script>
