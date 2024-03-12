<template>
  <div class="favorites mt-24">
    <div v-if="favoriteCharacters.length === 0" class="">
      <div class="empty-favorites-list flex flex-col items-center mt-6">
        <img
          class="grayscale h-[550px]"
          src="../../assets/images/confused-spider-man.jpeg"
        />
        <p class="font-semibold text-lg">No favorite characters saved yet</p>
      </div>
    </div>
    <div v-else class="grid grid-cols-3 md:grid-cols-4 gap-4 m-5">
      <div
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getFavoriteCharacters } from "../../services/CharactersService";
import CharacterCard from "../CharacterCard/CharacterCard.vue";

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
