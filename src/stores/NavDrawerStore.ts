import { defineStore } from "pinia";

export const useNavDrawerStore = defineStore("NavDrawerStore", {
  state: () => ({
    drawer: false,
    rail: false,
  }),
  actions: {
    setDrawer(lang: boolean) {
      this.drawer = lang;
    },
    setRail(lang: boolean) {
      this.rail = lang;
    },
  },
});
