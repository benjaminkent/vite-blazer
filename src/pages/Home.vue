<template>
  <div class="flex flex-col items-center gap-8 bg-gray-900 h-screen pt-28">
    <div class="flex gap-16">
      <ViteLogo />
      <VueLogo class="text-4xl" />
    </div>
    <h1 class="text-vue-green text-xl font-bold">{{ demoState.title }}</h1>
    <RelevantInfo />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDemoStore } from '@/stores/demo';
import VueLogo from '@/assets/vue-logo.svg?component';
import ViteLogo from '@/assets/vite-logo.svg?component';
import RelevantInfo from '@/components/RelevantInfo.vue';

const { demoState } = storeToRefs(useDemoStore());
</script>
