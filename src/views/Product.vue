<template>
    <Breadcrumb title="Product" />
    <Product :products="products" />
</template>

<script>
import Product from "../components/Product.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../stores/products";

export default {
    components: {
        Product,
        Breadcrumb,
    },
    computed: {
        ...mapState(useProductStore, ["products"]),
    },
    created() {
        document.title = `Shayna Store - ${this.$route.meta.title}`;
        this.loadProducts();
    },
    methods: {
        ...mapActions(useProductStore, ["get"]),
        async loadProducts() {
            const params = {
                include: "category,file",
            };
            await this.get(params);
        },
    },
};
</script>
