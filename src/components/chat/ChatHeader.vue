<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    workPosition: {
      type: String,
    },
  },
});
</script>

<template>
  <div
    class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 h-fit"
  >
    <div class="relative flex items-center space-x-4">
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt=""
          class="w-11 sm:w-16 h-11 sm:h-16 rounded-full"
        />
      </div>
      <div class="flex flex-col leading-tight">
        <div class="text-2xl mt-1 flex items-center">
          <span class="text-gray-700 mr-3">{{
            name == null ? "John Doe" : name
          }}</span>
        </div>
        <span class="text-lg text-gray-600">{{
          workPosition == null ? "Anonymous" : workPosition
        }}</span>
      </div>
    </div>
  </div>
</template>
