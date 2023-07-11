import { defineStore } from "pinia";

export const useNavDrawerStore = defineStore("NavDrawerStore", {
  state: () => ({
    drawer: false,
  }),
  actions: {
    setDrawer(lang: boolean) {
      this.drawer = lang;
    },
  },
});
