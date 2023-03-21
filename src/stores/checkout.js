import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";
import { useAlertStore } from "./alert";
import { useAuthStore } from "./auth";

export const useCheckoutStore = defineStore("checkout", {
    actions: {
        async checkout() {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.post(
                    "checkout/store",
                    {},
                    {
                        headers: {
                            Authorization: auth.token,
                        },
                    }
                );

                let id = res.data.data.transaction_id;

                router.push(`transactions/${id}`);
            } catch (error) {
                alert.handleError(error);
            }
        },
    },
});
