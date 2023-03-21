import axios from "axios";
import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
import { useAuthStore } from "./auth";

export const useCartStore = defineStore("carts", {
    state: () => ({
        carts: [],
        total: 0,
    }),
    actions: {
        async get(params) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
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
            } catch (error) {
                alert.handleError(error);
            }
        },
        async save(data) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.post("carts/store", data, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                alert.handleSuccess("Successfully add to cart.");
            } catch (error) {
                alert.handleError(error);
            }
        },
        async delete(id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.delete(`carts/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.total = 0;

                alert.handleSuccess("successfully deleted.");
            } catch (error) {
                alert.handleError(error);
            }
        },
    },
});
