import axios from "axios";
import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
import { useAuthStore } from "./auth";

export const useTransactionStore = defineStore("transactions", {
    state: () => ({
        transactions: [],
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
        async get(params) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.get("transactions", {
                    params: params,
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.transactions = res.data.data;
            } catch (error) {
                alert.handleError(error);
            }
        },
        async show(id, params) {
            this.clear();
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.get(`transactions/${id}/show`, {
                    params: params,
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.transaction = res.data.data;
            } catch (error) {
                alert.handleError(error);
            }
        },
        clear() {
            this.transaction = {
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
            };
        },
    },
});
