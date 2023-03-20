<template>
    <main>
        <Carousel :carousels="carousels" />
        <div class="row d-flex justify-content-center mt-5 mx-0">
            <div class="col-6 text-center">
                <RouterLink to="/products" class="btn btn-warning">Show All Products</RouterLink>
            </div>
        </div>
        <Product :products="products" />
        <!-- <Instagram /> -->
    </main>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Product from "../components/Product.vue";
// import Instagram from "../components/Instagram.vue";
import { mapActions, mapState } from "pinia";
import { useBannerStore } from "../stores/banners";
import { useProductStore } from "../stores/products";

export default {
    components: {
        Product,
        // Instagram,
        Carousel,
    },
    computed: {
        ...mapState(useBannerStore, ["carousels"]),
        ...mapState(useProductStore, ["products"]),
    },
    created() {
        document.title = `Shayna Store - ${this.$route.meta.title}`;
        this.loadCarousels();
        this.loadProducts();
    },
    methods: {
        ...mapActions(useBannerStore, { getBanners: "get" }),
        ...mapActions(useProductStore, { getProducts: "get" }),
        async loadCarousels() {
            const params = {
                include: "file",
                limit: 3,
            };
            await this.getBanners(params);
        },
        async loadProducts() {
            const params = {
                include: "category,file",
                limit: 4,
            };
            await this.getProducts(params);
        },
    },
};
</script>
