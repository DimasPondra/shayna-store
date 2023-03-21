import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import { useAuthStore } from "./auth";

export const useCheckoutStore = defineStore("checkout", {
    actions: {
        async checkout() {
            const auth = useAuthStore();
            const toast = useToast();

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
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
    },
});
