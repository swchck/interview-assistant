<script lang="ts" setup>
import ChatHeader from "../components/chat/ChatHeader.vue";
import ChatMessages from "../components/chat/ChatMessages.vue";
import MessageBox from "../components/chat/MessageBox.vue";

const questions = [
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
];
</script>

<template>
  <div class="relative flex flex-col h-full overflow-hidden">
    <ChatHeader
      :name="`Andrei Bogomazov`"
      :work-position="`Backend Developer`"
      :status="`Closed`"
      :updated="new Date()"
    />
    <ChatMessages :questions="questions" />
    <MessageBox />
  </div>
</template>
