<template>
  <div>
    <div class="m-5">
      <label for="first_name" class="mb-2 text-sm font-medium text-gray-600"
        >Search for a character name:</label
      >
      <input
        aria-label="Search by character name input"
        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Ex: Spider man"
        v-model="name"
        @keydown.enter="this.$emit('searchbar-input', name)"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  emits: ["searchbar-input"],
  data() {
    return {
      name: "",
    };
  },
});
</script>
