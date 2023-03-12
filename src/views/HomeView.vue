<template>
    <main>
        <Carousel />
        <Product :products="products" />
        <Instagram />
    </main>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Product from "../components/Product.vue";
import Instagram from "../components/Instagram.vue";
import axios from "axios";

export default {
    components: {
        Product,
        Instagram,
        Carousel,
    },
    data() {
        return {
            products: [],
            query_params: {
                include: "category,file",
            },
        };
    },
    computed: {
        params: function () {
            return {
                include: this.query_params.include,
            };
        },
    },
    created() {
        this.loadProducts();
        document.title = `Shayna Store - ${this.$route.meta.title}`;
    },
    methods: {
        async loadProducts() {
            const response = await axios.get("products", {
                params: this.params,
            });

            this.products = response.data.data;
        },
    },
};
</script>
