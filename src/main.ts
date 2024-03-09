import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import CharactersList from "./components/CharactersList.vue";
import CharacterCard from "./components/CharacterCard.vue";
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdFavoriteborder, MdFavorite } from "oh-vue-icons/icons";

addIcons(MdFavoriteborder, MdFavorite);

const app = createApp(App);

app.use(store);
app.use(router);

app.component("v-icon", OhVueIcon);
app.component("SearchBar", SearchBar);
app.component("NavBar", NavBar);
app.component("CharactersList", CharactersList);
app.component("CharacterCard", CharacterCard);
app.mount("#app");
