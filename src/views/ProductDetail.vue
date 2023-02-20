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
                                <div class="quantity">
                                    <a href="" class="primary-btn pd-cart">Add To Cart</a>
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
        this.loadProduct();
    },
    methods: {
        async loadProduct() {
            const slug = this.$route.params.slug;

            if (slug != undefined) {
                const response = await axios.get(`products/${slug}`, {
                    params: this.params,
                });

                this.product = response.data.data;
            }
        },
    },
};
</script>
