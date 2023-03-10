import { createRouter, createWebHistory } from "vue-router";

import Product from "./routes/products";
import Cart from "./routes/carts";
import Transaction from "./routes/transactions";

import VueRouteMiddleware from "vue-route-middleware";
import GuestMiddleware from "../middleware/guest";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
            meta: {
                title: "Home",
                name_page: "home",
            },
        },
        ...Product,
        ...Cart,
        ...Transaction,
        {
            path: "/login",
            name: "login",
            component: () => import("../views/Login.vue"),
            meta: {
                title: "Login",
                name_page: "login",
                middleware: [GuestMiddleware],
            },
        },
    ],
});

router.beforeEach(VueRouteMiddleware());
export default router;
