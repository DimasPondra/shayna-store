<template>
    <Breadcrumb />

    <section class="product-shop spad page-details">
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
                                    <h4>{{ product.price }}</h4>
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
import axios from "axios";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import { useToast } from "vue-toastification";

export default {
    components: {
        Breadcrumb,
        ProductRelated,
    },
    data() {
        return {
            product: {
                name: "",
                description: "",
                price: "",
                category: {
                    name: "",
                },
                file: {
                    url: "",
                },
            },
            cart: {
                product_id: null,
            },
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
        ...mapState(useAuthStore, ["token"]),
    },
    created() {
        this.loadProduct();
        document.title = `Shayna Store - ${this.$route.meta.title}`;
    },
    methods: {
        async loadProduct() {
            const slug = this.$route.params.slug;

            if (slug != undefined) {
                const response = await axios.get(`products/${slug}`, {
                    params: this.params,
                });

                this.product = response.data.data;
                this.cart.product_id = response.data.data.id;
            }
        },
        async addToCart() {
            const toast = useToast();

            try {
                await axios.post("carts/store", this.cart, {
                    headers: {
                        Authorization: this.token,
                    },
                });

                toast.success("Successfully add to cart.");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
    },
};
</script>
