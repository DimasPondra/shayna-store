import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/cart",
        name: "cart",
        component: () => import("../../views/Cart.vue"),
        meta: {
            title: "Cart",
            name_page: "cart",
            middleware: [AuthMiddleware],
        },
    },
];
