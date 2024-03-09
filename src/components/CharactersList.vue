<template>
  <div class="grid grid-cols-3 md:grid-cols-4 gap-4 m-5">
    <div
      v-for="(character, key) in characters"
      :key="key"
      class="character-list h-full"
    >
      <CharacterCard :character="character" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCharacters } from "../services/CharactersService";
import CharacterCard from "./CharacterCard.vue";

export default defineComponent({
  name: "CharactersList",
  component: [CharacterCard],
  data() {
    return {
      characters: [],
      loading: false,
      offset: 0,
    };
  },
  created() {
    getCharacters(20, this.offset).then((data) => {
      this.characters = data;
    });
  },
  mounted() {
    window.addEventListener("scroll", () => this.handleScroll());
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.offset += 20;
      getCharacters(20, this.offset).then((data) => {
        data.forEach((character) => {
          this.characters.push(character);
        });
      });
      this.loading = false;
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.loadMore();
      }
    },
  },
});
</script>
