import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useTransactionStore = defineStore("transactions", {
    state: () => ({
        transaction: {
            id: null,
            uuid: null,
            sub_total: "",
            total: "",
            status: "",
            user: {
                name: "",
                email: "",
                phone: "",
                address: "",
            },
            transaction_details: [],
        },
    }),
    actions: {
        async show(id, params) {
            const auth = useAuthStore();

            const res = await axios.get(`transactions/${id}/show`, {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.transaction = res.data.data;
        },
    },
});
