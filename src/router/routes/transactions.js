import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/transactions",
        name: "transaction",
        component: () => import("../../views/Transaction.vue"),
        meta: {
            title: "Transaction",
            name_page: "transactions",
            middleware: [AuthMiddleware],
        },
    },
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
