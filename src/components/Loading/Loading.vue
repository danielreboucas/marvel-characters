<template>
  <div>
    <div v-show="loading" class="fixed top-[46%] left-[46%]">
      <img
        src="../../assets/images/spinner.svg"
        class="motion-reduce:animate-spin h-20"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: ["loading"],
});
</script>
