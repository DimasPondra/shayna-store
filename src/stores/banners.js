import axios from "axios";
import { defineStore } from "pinia";

export const useBannerStore = defineStore("banners", {
    state: () => ({
        carousels: [],
    }),
    actions: {
        async get(params) {
            const res = await axios.get("banners", {
                params: params,
            });

            this.carousels = res.data.data;
        },
    },
});
