<script lang="ts" setup>
import Message from "./Message.vue";
import { onMounted } from "vue";

defineProps<{
  questions: string[];
}>();

onMounted(() => {
  const messagesBody = document.getElementById(
    "messages-body"
  ) as HTMLDivElement | null;
  if (messagesBody != null) {
    console.log(messagesBody.scrollTop, messagesBody.scrollHeight);
    messagesBody.scrollTop = messagesBody.scrollHeight;
    console.log(messagesBody.scrollTop, messagesBody.scrollHeight);
  }
});
</script>

<template>
  <div
    class="overflow-scroll py-2 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 h-screen"
  >
    <div
      id="messages"
      class="flex flex-col p-3 scrolling-touch"
      v-for="question in questions"
    >
      <Message :text="question" :is-answer="false" />
    </div>
  </div>
</template>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 0;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>
