<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "../components/Header.vue";
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-start items-stretch">
    <Header />
    <RouterView />
  </div>
</template>
