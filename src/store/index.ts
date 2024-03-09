import { createStore } from "vuex";

export default createStore({
  state: {
    favoritesIds: [] as number[],
  },
  mutations: {
    addFavorite(state, payload) {
      state.favoritesIds.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favoritesIds));
    },
    removeFavorite(state, payload) {
      state.favoritesIds.splice(state.favoritesIds.indexOf(payload), 1);
      localStorage.setItem("favorites", JSON.stringify(state.favoritesIds));
    },
  },
  actions: {
    addFavorite({ commit }, payload) {
      commit("addFavorite", payload);
    },
    removeFavorite({ commit }, payload) {
      commit("removeFavorite", payload);
    },
  },
});
