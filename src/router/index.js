import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/products",
            name: "products",
            component: () => import("../views/Product.vue"),
        },
        {
            path: "/products/:slug",
            name: "product",
            component: () => import("../views/ProductDetail.vue"),
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("../views/Cart.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/Login.vue"),
        },
    ],
});

export default router;
