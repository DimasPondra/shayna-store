import axios from "axios";
import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
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
            this.clear();
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.get("bank-accounts/active-status", {
                    params: {
                        include: "bank",
                    },
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.bank_account = res.data.data;
            } catch (error) {
                alert.handleError(error);
            }
        },
        clear() {
            this.bank_account = {
                name: "",
                number: "",
                bank: {
                    name: "",
                },
            };
        },
    },
});
