<template>
  <div class="home-page">
    <!-- <SearchBar /> -->
    <CharactersList />
  </div>
</template>

<script lang="ts">
import CharactersList from "../CharactersList/CharactersList.vue";
import SearchBar from "../SearchBar/SearchBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  component: [CharactersList, SearchBar],
});
</script>
