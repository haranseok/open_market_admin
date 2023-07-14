import { defineStore } from "pinia";

export const useGlobalStore = defineStore("GlobalStore", {
  state: () => ({
    componentName: "",
  }),
  getters: {
    getComponentName: (state) => state.componentName,
  },
  actions: {
    setComponentName(link: any) {
      this.componentName = link;
    },
  },
});
