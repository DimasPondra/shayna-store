import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
    state: () => ({
        products: [],
        product: {
            id: null,
            name: "",
            description: "",
            format_price: "",
            category: {
                name: "",
            },
            file: {
                url: "",
            },
        },
    }),
    actions: {
        async get(params) {
            const res = await axios.get("products", {
                params: params,
            });

            this.products = res.data.data;
        },
        async show(slug, params) {
            const res = await axios.get(`products/${slug}`, {
                params: params,
            });

            this.product = res.data.data;
        },
    },
});
