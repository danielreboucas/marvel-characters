<template>
  <div>
    <!-- <div v-show="loading" class="fixed top-[46%] left-[46%]">
      <img
        src="../assets/images/spinner.svg"
        class="motion-reduce:animate-spin h-20"
      />
    </div> -->
    <Loading :loading="loading" />
    <div :class="`grid grid-cols-3 md:grid-cols-4 gap-4 m-5 ${isLoading}`">
      <div
        v-for="(character, key) in characters"
        :key="key"
        class="character-list min-h-96"
      >
        <CharacterCard :character="character" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCharacters } from "../../services/CharactersService";
import CharacterCard from "../CharacterCard/CharacterCard.vue";
import Loading from "../Loading/Loading.vue";

export default defineComponent({
  name: "CharactersList",
  component: [CharacterCard, Loading],
  data: (): any => {
    return {
      characters: [],
      loading: false,
      offset: 0,
    };
  },
  computed: {
    isLoading(): string {
      return this.loading ? "opacity-50" : "";
    },
  },
  async created() {
    await this.requestGetCharacters(20, this.offset);
  },
  mounted() {
    window.addEventListener("scroll", () => this.handleScroll());
  },
  methods: {
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.loadMore();
      }
    },
    async loadMore() {
      this.loading = true;
      this.offset += 20;

      //TODO REMOVE setTimeout
      setTimeout(() => {
        this.requestGetCharacters(20, this.offset);
        this.loading = false;
      }, 5000);
    },
    async requestGetCharacters(limit: number, offset: number) {
      try {
        this.loading = true;
        getCharacters(limit, offset).then((data) => {
          data.forEach((character) => {
            this.characters.push(character);
          });
        });
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>
