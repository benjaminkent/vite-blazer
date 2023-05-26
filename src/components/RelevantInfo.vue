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
                class="underline"
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
import { computed } from 'vue';

const infoData = computed(() => [
  {
    title: 'Recommended IDE',
    links: [
      {
        name: 'VS Code',
        link: 'https://code.visualstudio.com/',
      },
      {
        name: 'Volar',
        link: 'https://marketplace.visualstudio.com/items?itemName=Vue.volar',
      },
    ],
  },
  {
    title: 'Documentation',
    links: [
      {
        name: 'Vite',
        link: 'https://vitejs.dev/',
      },
      {
        name: 'Vue3',
        link: 'https://vuejs.org/guide/introduction.html',
      },
      {
        name: 'Pinia',
        link: 'https://pinia.vuejs.org/introduction.html',
      },
      {
        name: 'Vue Router 4',
        link: 'https://router.vuejs.org/guide/',
      },
    ],
  },
]);
</script>
