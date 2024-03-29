<template>
  <div>
    <Loading :loading="loading" />
    <Modal
      :showModal="showModal"
      :character="character"
      @close-modal="closeModal"
    />
    <SearchBar @searchbar-input="filterCharactersByName" />
    <div
      :class="`grid grid-cols-3 md:grid-cols-4 gap-4 gap-y-9 m-5 ${isLoading}`"
    >
      <div
        v-for="(character, key) in characters"
        :key="key"
        class="min-h-96 ease-in hover:scale-[1.1] transition duration-300"
      >
        <CharacterCard
          :character="character"
          @show-modal="showCharacterModal"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCharacters } from "../../services/CharactersService";
import CharacterCard from "../CharacterCard/CharacterCard.vue";
import Loading from "../Loading/Loading.vue";
import SearchBar from "../SearchBar/SearchBar.vue";

export default defineComponent({
  name: "CharactersList",
  component: [CharacterCard, Loading, SearchBar],
  data() {
    return {
      characters: [],
      character: {},
      loading: false,
      nameFilter: "",
      offset: 0,
      showModal: false,
    };
  },
  computed: {
    isLoading(): string {
      return this.loading || this.showModal ? "opacity-50" : "";
    },
  },
  async created() {
    await this.requestGetCharacters(20, this.offset, this.nameFilter);
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
    showCharacterModal(e: any) {
      this.character = e;
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    },
    async filterCharactersByName(characterName: string) {
      this.nameFilter = characterName;
      this.characters = [];
      this.offset = 0;
      await this.requestGetCharacters(20, this.offset, this.nameFilter);
    },
    async loadMore() {
      this.offset += 20;
      this.requestGetCharacters(20, this.offset, this.nameFilter);
    },
    async requestGetCharacters(limit: number, offset: number, name?: string) {
      try {
        this.loading = true;
        await getCharacters(limit, offset, name).then((data) => {
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
