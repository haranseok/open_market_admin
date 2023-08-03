import { defineStore } from "pinia";

export const useButtonStore = defineStore("ButtonStore", {
  state: () => ({
    list: [],
    backBtn: false,
  }),
  getters: {},
  actions: {
    setButtonClick() {
      this.list;
    },
  },
});
