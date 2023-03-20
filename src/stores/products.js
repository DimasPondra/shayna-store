import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
    state: () => ({
        products: [],
    }),
    actions: {
        async get(params) {
            const res = await axios.get("products", {
                params: params,
            });

            this.products = res.data.data;
        },
    },
});
