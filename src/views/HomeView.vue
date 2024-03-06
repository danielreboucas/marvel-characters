<template>
  <div class="home">
    <HomePage msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "@/components/HomePage/HomePage.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomePage,
  },
});
</script>
