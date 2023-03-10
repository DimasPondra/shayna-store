import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/transactions/:id",
        name: "detail-transaction",
        component: () => import("../../views/TransactionDetail.vue"),
        meta: {
            title: "Detail Transaction",
            name_page: "transactions",
            middleware: [AuthMiddleware],
        },
    },
];
