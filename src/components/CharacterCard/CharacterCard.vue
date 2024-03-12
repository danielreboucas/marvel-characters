<template>
  <div class="character-card min-h-96">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full cursor-pointer h-80"
        :src="`${character.thumbnail.path}.${character.thumbnail.extension}`"
        @click.prevent="showModal"
      />
      <div class="px-6 py-4">
        <div class="flex items-center justify-between">
          <div
            class="font-bold text-xl mb-2 cursor-pointer"
            @click.prevent="showModal"
          >
            {{ character.name }}
          </div>
          <v-icon
            v-if="!isFavorite"
            name="md-favoriteborder"
            class="cursor-pointer text-[#EC1D24]"
            @click.prevent="addFavorite"
          ></v-icon>
          <v-icon
            v-else
            name="md-favorite"
            class="cursor-pointer text-[#EC1D24]"
            @click.prevent="removeFavorite"
          ></v-icon>
        </div>
        <p
          class="description text-gray-700 text-base overflow-hidden min-h-24 max-h-24"
        >
          {{ character.description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ character.events.available }} Events</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ character.comics.available }} Comics</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ character.stories.available }} Stories</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../Modal/Modal.vue";

export default defineComponent({
  name: "CharactersCard",
  component: [Modal],
  props: ["character"],
  emits: ["update-favorites", "show-modal"],
  data() {
    return {
      isFavorite: false,
    };
  },
  updated() {
    this.isCharacterInLocalStorage();
  },
  mounted() {
    this.isCharacterInLocalStorage();
  },
  methods: {
    addFavorite() {
      this.isFavorite = true;
      this.$store.dispatch("addFavorite", this.buildCharacter());
    },
    removeFavorite() {
      this.isFavorite = false;
      this.$store.dispatch("removeFavorite", this.buildCharacter());
      this.$emit("update-favorites");
    },
    buildCharacter() {
      return {
        id: this.character.id,
        name: this.character.name,
        thumbnail: {
          path: this.character.thumbnail.path,
          extension: this.character.thumbnail.extension,
        },
        description: this.character.description,
        events: {
          available: this.character.events.available,
        },
        comics: {
          available: this.character.comics.available,
        },
        stories: {
          available: this.character.stories.available,
        },
      };
    },
    showModal() {
      this.$emit("show-modal", this.character);
    },
    isCharacterInLocalStorage() {
      if (
        JSON.parse(localStorage.getItem("favorites") || "[]").filter(
          (data: any) => {
            return data.id === this.character.id;
          }
        ).length > 0
      ) {
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
    },
  },
});
</script>

<style>
@import "./CharacterCard.scss";
</style>
