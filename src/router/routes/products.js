export default [
    {
        path: "/products",
        name: "product",
        component: () => import("../../views/Product.vue"),
    },
    {
        path: "/products/:slug",
        name: "detail-product",
        component: () => import("../../views/ProductDetail.vue"),
    },
];
