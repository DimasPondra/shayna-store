export default [
    {
        path: "/products",
        name: "product",
        component: () => import("../../views/Product.vue"),
        meta: {
            title: "Product",
            name_page: "products",
        },
    },
    {
        path: "/products/:slug",
        name: "detail-product",
        component: () => import("../../views/ProductDetail.vue"),
        meta: {
            title: "Detail Product",
            name_page: "products",
        },
    },
];
