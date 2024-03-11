<template>
  <header class="navbar bg-[#202020]">
    <nav class="ml-5 py-3 flex flex-row items-center gap-3 min-h-16 text-white">
      <div>
        <img
          class="h-12 mr-5 rounded-sm"
          src="../assets/images/marvel-logo-4-1.png"
        />
      </div>
      <RouterLink
        to="/"
        class="hover:border-b-2 hover:border-[#EC1D24] delay-75 h-7 font-semibold active."
        >Home</RouterLink
      >
      <RouterLink
        to="/favorites"
        class="hover:border-b-2 hover:border-[#EC1D24] delay-75 h-7 font-semibold"
        >Favorites</RouterLink
      >
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style>
@import "./Navbar.scss";
</style>
