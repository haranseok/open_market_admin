import { defineStore } from "pinia";

export const useButtonStore = defineStore("ButtonStore", {
  state: () => ({
    list: [],
  }),
  getters: {},
  actions: {
    setButtonClick() {
      this.list;
    },
  },
});
