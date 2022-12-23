<script lang="ts" setup>
import Message from "./Message.vue";
</script>

<template>
  <div class="overflow-scroll h-fit">
    <div
      id="messages"
      class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      v-for="message in messages"
    >
      <Message :text="message" :is-answer="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      messages: [
        "Can be verified on any platform using docker",
        "Your error message says permission denied, npm global installs must be given root privileges.",
        "Command was run with root privileges. I'm sure about that.",
        "I've update the description so it's more obviously now",
        "FYI https://askubuntu.com/a/700266/510172",
        "Check the line above (it ends with a # so, I'm running it as root ) \<pre\># npm install -g @vue/devtools\<\/pre\>",
        "Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks",
        "Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)",
        "Are you using sudo?",
        "Run this command sudo chown -R `whoami` /Users//.npm-global/ then install the package globally without using sudo",
        "It seems like you are from Mac OS world. There is no /Users/ folder on linux ?",
        "I have no issue with any other packages installed with root permission globally.",
        "yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem",
        "I get the same error on Arch Linux (also with sudo)",
        "I also have this issue, Here is what I was doing until now: #1076",
        "even i am facing",
      ],
    };
  },
  mounted() {},
});
</script>

<style>
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
