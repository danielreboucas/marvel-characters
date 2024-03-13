<template>
  <div>
    <FavoritesList />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FavoritesList from "../FavoritesList/FavoritesList.vue";

export default defineComponent({
  name: "FavoritesPage",
  components: [FavoritesList],
});
</script>

<style></style>
