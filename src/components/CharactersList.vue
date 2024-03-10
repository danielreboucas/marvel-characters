<template>
  <div class="grid grid-cols-3 md:grid-cols-4 gap-4 m-5">
    <div
      v-for="(character, key) in characters"
      :key="key"
      class="character-list min-h-96"
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
      offset: 0,
    };
  },
  async created() {
    await this.requestGetCharacters(20, this.offset);
  },
  mounted() {
    window.addEventListener("scroll", () => this.handleScroll());
  },
  methods: {
    loadMore() {
      this.offset += 20;
      getCharacters(20, this.offset).then((data) => {
        data.forEach((character) => {
          this.characters.push(character);
        });
      });
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.loadMore();
      }
    },
    async requestGetCharacters(limit: number, offset: number) {
      try {
        await getCharacters(limit, offset).then((data) => {
          this.characters = data;
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>
