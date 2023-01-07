<script setup lang="ts">
import { defineComponent } from "vue";

const buttons = [
  {
    name: "Добавить Проект",
    link: "",
  },
];
</script>

<template>
  <div>
    <div
      class="h-screen flex flex-wrap: nowrap; justify-content: space-around; align-items: center;"
      v-for="button in buttons"
    >
      <span class="sm:ml-3">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <!-- Heroicon name: mini/check -->
          <svg
            class="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
          {{button.name}}
        </button>
      </span>
    </div>
  </div>
</template>
