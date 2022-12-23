import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/ChatView.vue"),
        },
        {
            path: "/add-form",
            name: "Add Form",
            component: () => import("../views/AddQuestionsView.vue")
        },
        {
            path: "/form/:formId",
            name: "Preview Form",
            component: () => import("../views/PreviewFormView.vue")
        },
        {
            path: "/form/:formId/answers",
            name: "Form Answers",
            component: () => import("../views/AddQuestionsView.vue")
        },
        {
            path: "/form/:formId/answers/:interviewId",
            name: "Interview Answers",
            component: () => import("../views/AddQuestionsView.vue")
        },
        {
            path: "/add-intreview",
            name: "Add Interview",
            component: () => import("../views/AddQuestionsView.vue")
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