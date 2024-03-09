<template>
  <div class="homepage">
    <SearchBar />
    <CharactersList />
  </div>
</template>

<script lang="ts">
import CharactersList from "./CharactersList.vue";
import SearchBar from "./SearchBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  component: [CharactersList, SearchBar],
});
</script>
