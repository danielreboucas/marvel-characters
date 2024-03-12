<template>
  <div
    v-show="showModal"
    class="container fixed flex bg-[#202020] text-white rounded top-[35%] left-[40%] w-[500px] h-[350px] z-10"
    role="dialog"
  >
    <div class="flex my-7 w-full">
      <div class="here flex flex-col justify-between w-full">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between">
            <h5 class="font-bold">{{ character.name }}</h5>
            <v-icon
              name="md-close"
              class="cursor-pointer hover:bg-white hover:text-black rounded font-bold"
              @click.prevent="closeModal"
            />
          </div>
          <div class="text-justify">
            <p>
              {{
                character.description
                  ? character.description
                  : "No description."
              }}
            </p>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            class="hover:bg-white hover:text-black w-[15%] h-7 duration-150 rounded font-semibold"
            @click.prevent="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: ["showModal", "character"],
  emits: ["close-modal"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
});
</script>
