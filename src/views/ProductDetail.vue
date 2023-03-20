<template>
    <Breadcrumb title="Product Detail" />

    <section class="product-shop page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src="product.file.url" alt="image-product" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>{{ product.category.name }}</span>
                                    <h3>{{ product.name }}</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                        {{ product.description }}
                                    </p>
                                    <h4>{{ product.format_price }}</h4>
                                </div>
                                <div class="quantity" v-if="token != null">
                                    <button @click="addToCart()" class="primary-btn pd-cart border-0">
                                        Add To Cart
                                    </button>
                                </div>
                                <div class="quality" v-else>
                                    <RouterLink to="/login" class="primary-btn pd-cart">Login</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <ProductRelated />
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import ProductRelated from "../components/Product.vue";

import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import { useCartStore } from "../stores/carts";
import { useProductStore } from "../stores/products";

export default {
    components: {
        Breadcrumb,
        ProductRelated,
    },
    computed: {
        ...mapState(useProductStore, ["product"]),
        ...mapState(useAuthStore, ["token"]),
    },
    created() {
        document.title = `Shayna Store - ${this.$route.meta.title}`;
        this.loadProduct();
    },
    methods: {
        ...mapActions(useProductStore, ["show"]),
        ...mapActions(useCartStore, ["save"]),
        async loadProduct() {
            const slug = this.$route.params.slug;
            const params = {
                include: "category,file",
            };

            if (slug != undefined) {
                await this.show(slug, params);
            }
        },
        async addToCart() {
            const data = {
                product_id: this.product.id,
            };
            await this.save(data);
        },
    },
};
</script>
