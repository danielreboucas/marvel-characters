<template>
  <div class="grid grid-cols-3 md:grid-cols-4 gap-4 m-5">
    <div v-if="favoriteCharacters.length === 0">
      <p>No favorite characters were saved</p>
    </div>
    <div
      v-else
      v-for="(favoriteCharacter, key) in favoriteCharacters"
      :key="key"
      class="favorites-list h-full"
    >
      <CharacterCard
        :character="favoriteCharacter"
        @update-favorites="updateFavorites"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getFavoriteCharacters } from "../services/CharactersService";
import CharacterCard from "./CharacterCard.vue";

export default defineComponent({
  name: "CharactersList",
  component: [CharacterCard],
  data() {
    return {
      favoriteCharacters: [] as any[],
      offset: 0,
    };
  },
  created() {
    this.requestGetFavoriteCharacters();
  },
  methods: {
    updateFavorites() {
      this.requestGetFavoriteCharacters();
    },
    requestGetFavoriteCharacters() {
      try {
        this.favoriteCharacters = getFavoriteCharacters();
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>
