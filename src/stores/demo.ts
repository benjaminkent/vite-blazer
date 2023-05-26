import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const demoStore = defineStore('demo', () => {
  const demoState = reactive({
    title: 'Hello!',
  });

  return {
    demoState,
  };
});
