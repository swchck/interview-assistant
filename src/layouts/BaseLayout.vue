<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "../components/Header.vue";
</script>

<template>
  <div style="max-height: 100vh">
    <Header style="max-height: 10vh" />
    <RouterView style="max-height: 90vh" />
  </div>
</template>
