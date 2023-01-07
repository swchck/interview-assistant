<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
    },
    isAnswer: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  mounted() {},
});
</script>

<template>
  <div class="chat-message">
    <div :class="`flex items-end ${isAnswer ? 'justify-end' : ''}`">
      <div
        :class="`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
          isAnswer ? 'order-1 items-end' : 'order-2 items-start'
        }`"
      >
        <div>
          <span
            :class="`px-4 py-2 rounded-lg inline-block rounded-bl-none ${
              isAnswer ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
            } `"
            >{{ text }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
