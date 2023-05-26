<template>
  <div>
    <VueLogo />
    <h1 class="text-green-600">{{ demoState.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDemoStore } from '../stores/demo';
import VueLogo from '../assets/vue-logo.svg?component';

const { demoState } = storeToRefs(useDemoStore());
</script>
