<template>
  <div>
    <FavoritesPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FavoritesPage from "@/components/FavoritesPage.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    FavoritesPage,
  },
});
</script>
