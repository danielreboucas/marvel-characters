import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import CharactersList from "./components/CharactersList/CharactersList.vue";
import CharacterCard from "./components/CharacterCard/CharacterCard.vue";
import NavBar from "./components/NavBar/NavBar.vue";
import SearchBar from "./components/SearchBar/SearchBar.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdFavoriteborder, MdFavorite } from "oh-vue-icons/icons";
import FavoritesList from "./components/FavoritesList/FavoritesList.vue";
import Loading from "./components/Loading/Loading.vue";

addIcons(MdFavoriteborder, MdFavorite);

const app = createApp(App);

app.use(store);
app.use(router);

app.component("v-icon", OhVueIcon);
app.component("SearchBar", SearchBar);
app.component("NavBar", NavBar);
app.component("Loading", Loading);
app.component("FavoritesList", FavoritesList);
app.component("CharactersList", CharactersList);
app.component("CharacterCard", CharacterCard);
app.mount("#app");
