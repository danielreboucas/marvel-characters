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
    <div v-else>
      <Modal
        :showModal="showModal"
        :character="favoriteCharacter"
        @close-modal="closeModal"
      />
      <div :class="`grid grid-cols-3 md:grid-cols-4 gap-4 m-5 ${isModalOpen}`">
        <div
          v-for="(favoriteCharacter, key) in favoriteCharacters"
          :key="key"
          class="favorites-list h-full ease-in hover:scale-[1.1] transition duration-300"
        >
          <CharacterCard
            :character="favoriteCharacter"
            @show-modal="showFavoriteCharacterModal"
            @update-favorites="updateFavorites"
          />
        </div>
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
      favoriteCharacter: {},
      favoriteCharacters: [] as any[],
      offset: 0,
      showModal: false,
    };
  },
  created() {
    this.requestGetFavoriteCharacters();
  },
  computed: {
    isModalOpen(): string {
      return this.showModal ? "opacity-50" : "";
    },
  },
  methods: {
    updateFavorites() {
      this.requestGetFavoriteCharacters();
    },
    closeModal() {
      this.showModal = false;
    },
    showFavoriteCharacterModal(e: any) {
      this.favoriteCharacter = e;
      this.showModal = !this.showModal;
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
