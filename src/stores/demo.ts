import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useDemoStore = defineStore('demo', () => {
  const demoState = reactive({
    title: 'Vite + Vue3 + TS + TailwindCSS + Pinia + Axios + Prettier',
  });

  return {
    demoState,
  };
});
