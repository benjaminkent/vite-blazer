import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useDemoStore = defineStore('demo', () => {
  const demoState = reactive({
    title: [
      'Vite + Vue3 + Vue Router 4 + TS +',
      'TailwindCSS + Pinia + Axios + Prettier',
    ],
  });

  const infoData = computed(() => [
    {
      title: 'Recommended IDE Setup',
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

  return {
    demoState,
    infoData,
  };
});
