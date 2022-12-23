import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
        path: "/add-form",
        name: "Add Form",
        component: () => import("../views/AddQuestionsView.vue")
    },
    {
        path: "/form/:form-id",
        name: "Preview Form",
        component: () => import("../views/AddQuestionsView.vue")
    },
    {
        path: "/form/:form-id/answers",
        name: "Form Answers",
        component: () => import("../views/AddQuestionsView.vue")
    },
    {
        path: "/form/:form-id/answers/:interview-id",
        name: "Interview Answers",
        component: () => import("../views/AddQuestionsView.vue")
    },
    {
        path: "/add-intreview",
        name: "Add Interview"
    },
    {
        path: "/chat/",
        name: "interview",
        component: () => import("../views/ChatView.vue")
    },
    {
        path: "/test",
        name: "Test",
        component: () => import("../views/TestView.vue")
    }
  ],
});

export default router;