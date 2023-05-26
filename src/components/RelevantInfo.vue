<template>
  <div class="text-vue-green">
    <div>
      <ul>
        <li v-for="info in infoData" :key="info.title">
          <p class="font-bold mt-5">{{ info.title }}:</p>
          <ul class="flex">
            <li v-for="(link, index) in info.links" :key="index">
              <a
                :href="link.link"
                class="underline hover:text-green-600"
                :title="link.name"
                target="_blank"
                rel="noopener noreferrer"
                >{{ link.name }}</a
              >
              <span v-if="index !== info.links!.length - 1" class="mx-3"
                >|</span
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDemoStore } from '@/stores/demo';

const { infoData } = useDemoStore();
</script>
