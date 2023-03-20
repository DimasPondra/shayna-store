import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useAuthStore } from "./auth";

export const useCartStore = defineStore("carts", {
    state: () => ({
        carts: [],
        total: 0,
    }),
    actions: {
        async get(params) {
            const auth = useAuthStore();

            const res = await axios.get("carts", {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.carts = res.data.data;

            this.total = 0;
            this.carts.forEach((cart) => {
                this.total += parseInt(cart.product.price);
            });
        },
        async save(data) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                await axios.post("carts/store", data, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("Successfully add to cart.");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        async delete(id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                await axios.delete(`carts/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.total = 0;

                toast.success("successfully deleted.");
            } catch (error) {
                console.log(error);
            }
        },
    },
});
