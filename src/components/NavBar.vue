<template>
  <header class="sticky bg-gray-800 top-0">
    <nav
      class="container flex flex-col sm:flex-row ml-5 gap-4 text-white py-5 pl-0"
    >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>
