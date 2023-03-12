<template>
    <Breadcrumb title="Product" />
    <Product :products="products" />
</template>

<script>
import axios from "axios";
import Product from "../components/Product.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
    components: {
        Product,
        Breadcrumb,
    },
    data() {
        return {
            products: [],
            include: "category,file",
        };
    },
    computed: {
        params: function () {
            return {
                include: this.include,
            };
        },
    },
    created() {
        this.loadData();
        document.title = `Shayna Store - ${this.$route.meta.title}`;
    },
    methods: {
        async loadData() {
            const response = await axios.get("products", {
                params: this.params,
            });

            this.products = response.data.data;
        },
    },
};
</script>
