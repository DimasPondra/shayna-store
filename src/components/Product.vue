<template>
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-3 mt-5" v-for="product in products" :key="product.id">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img :src="product.file.url" alt="product-image" />
                            <ul>
                                <li class="w-icon active">
                                    <router-link :to="`/products/${product.slug}`"
                                        ><font-awesome-icon icon="fa-solid fa-cart-arrow-down"
                                    /></router-link>
                                </li>
                                <li class="quick-view">
                                    <router-link :to="`/products/${product.slug}`">+ Quick View</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="category-name">{{ product.category.name }}</div>
                            <router-link :to="`/products/${product.slug}`">
                                <h5>{{ product.name }}</h5>
                            </router-link>
                            <div class="product-price">
                                {{ product.price }}
                                <!-- <span>$35.00</span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        products: Array,
    },
};
</script>
