<template>
    <Breadcrumb title="Cart" />

    <section class="shopping-cart">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="cart in carts" :key="cart.id">
                                            <td class="cart-pic first-row">
                                                <img :src="cart.product.file.url" alt="" />
                                            </td>
                                            <td class="cart-tittle first-row text-center">
                                                <h5>{{ cart.product.name }}</h5>
                                            </td>
                                            <td class="p-price first-row">{{ cart.product.format_price }}</td>
                                            <td class="delete-item">
                                                <button @click="handleDelete(cart.id)" class="border-0 bg-white">
                                                    <font-awesome-icon icon="fa-solid fa-xmark" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="proceed-checkout">
                                <ul>
                                    <li class="subtotal mt-3">
                                        Subtotal <span>{{ currency }}</span>
                                    </li>
                                    <li class="subtotal mt-3">
                                        Total Biaya <span>{{ currency }}</span>
                                    </li>
                                </ul>
                                <button @click="handleCheckout" class="proceed-btn w-100">CHECKOUT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";

import { mapActions, mapState } from "pinia";
import { useCartStore } from "../stores/carts";
import { useCheckoutStore } from "../stores/checkout";

export default {
    components: {
        Breadcrumb,
    },
    computed: {
        ...mapState(useCartStore, ["carts", "total"]),
        params: function () {
            return {
                include: "product,user,file",
            };
        },
        currency: function () {
            return this.total.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
        },
    },
    created() {
        document.title = `Shayna Store - ${this.$route.meta.title}`;
        this.loadCarts();
    },
    methods: {
        ...mapActions(useCartStore, ["get", "delete"]),
        ...mapActions(useCheckoutStore, ["checkout"]),
        async loadCarts() {
            await this.get(this.params);
        },
        async handleDelete(id) {
            await this.delete(id);
            await this.loadCarts();
        },
        async handleCheckout() {
            await this.checkout();
        },
    },
};
</script>
