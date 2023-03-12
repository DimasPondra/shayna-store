<template>
    <main>
        <Carousel :carousels="carousels" />
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-3 text-center">
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
import axios from "axios";

export default {
    components: {
        Product,
        // Instagram,
        Carousel,
    },
    data() {
        return {
            products: [],
            carousels: [],
        };
    },
    created() {
        document.title = `Shayna Store - ${this.$route.meta.title}`;
        this.loadCarousels();
        this.loadProducts();
    },
    methods: {
        async loadProducts() {
            const response = await axios.get("products", {
                params: {
                    include: "category,file",
                    limit: 4,
                },
            });

            this.products = response.data.data;
        },
        async loadCarousels() {
            const response = await axios.get("banners", {
                params: {
                    include: "file",
                    limit: 3,
                },
            });

            this.carousels = response.data.data;
        },
    },
};
</script>
