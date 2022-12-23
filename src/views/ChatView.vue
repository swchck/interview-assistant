<script lang="ts" setup>
import ChatHeader from "../components/chat/ChatHeader.vue";
import ChatMessages from "../components/chat/ChatMessages.vue";
import MessageBox from "../components/chat/MessageBox.vue";
</script>

<template>
  <div
    class="sm:p-6 flex flex-col px-4 sm:px-6 lx:px-8"
  >
    <ChatHeader />
    <ChatMessages />
    <MessageBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  mounted() {
    const messagesBody = document.getElementById(
      "messages-body"
    ) as HTMLDivElement | null;
    if (messagesBody != null) {
      console.log(messagesBody.scrollTop, messagesBody.scrollHeight);
      messagesBody.scrollTop = messagesBody.scrollHeight;
      console.log(messagesBody.scrollTop, messagesBody.scrollHeight);
    }
  },
});
</script>
