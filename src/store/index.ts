import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: [] as any[],
  },
  mutations: {
    addFavorite(state, payload) {
      state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite(state, payload) {
      state.favorites.splice(
        state.favorites.findIndex((data: any) => data.id === payload.id),
        1
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
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
