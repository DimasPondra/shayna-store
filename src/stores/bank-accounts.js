import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useBankAccountStore = defineStore("bank-accounts", {
    state: () => ({
        bank_account: {
            name: "",
            number: "",
            bank: {
                name: "",
            },
        },
    }),
    actions: {
        async showActiveStatus() {
            const auth = useAuthStore();

            const res = await axios.get("bank-accounts/active-status", {
                params: {
                    include: "bank",
                },
                headers: {
                    Authorization: auth.token,
                },
            });

            this.bank_account = res.data.data;
        },
    },
});
