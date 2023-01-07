import { defineStore, acceptHMRUpdate } from 'pinia'

export const useProjectsStore = defineStore({
    id: 'projects',
    state: () => ({
        rawItems: [] as string[],
    }),
    getters: {
    },
    actions: {

    },
});