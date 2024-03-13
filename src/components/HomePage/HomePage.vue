<template>
  <div class="mt-24">
    <CharactersList />
  </div>
</template>

<script lang="ts">
import CharactersList from "../CharactersList/CharactersList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  component: [CharactersList],
});
</script>
