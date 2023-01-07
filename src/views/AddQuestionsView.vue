<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  data() {
    return {
      questions: [
        "Add another component to Tailwind Components",
        "Submit Todo App Component to Tailwind Components",
      ],
    };
  },
  mounted() {},
});
</script>

<template>
  <div>
    <div
      class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
    >
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
          <h1 class="text-grey-darkest">Todo List</h1>
          <div class="flex mt-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button
              class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            >
              Add
            </button>
          </div>
        </div>
        <div v-for="(question, index) in questions">
          <div class="flex mb-4 items-center">
            <p>{{ index }}</p>
            <p class="w-full text-grey-darkest">
              {{ question }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
