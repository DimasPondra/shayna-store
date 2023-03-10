<template>
    <Breadcrumb />

    <section class="shopping-cart spad">
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
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb.vue";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
import router from "../router";
import { useToast } from "vue-toastification";

export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            carts: [],
            total: 0,
        };
    },
    computed: {
        params: function () {
            return {
                include: "product,user,file",
            };
        },
        ...mapState(useAuthStore, ["token"]),
        currency: function () {
            return this.total.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
        },
    },
    created() {
        this.loadData();
        document.title = `Shayna Store - ${this.$route.meta.title}`;
    },
    methods: {
        async loadData() {
            const response = await axios.get("carts", {
                params: this.params,
                headers: {
                    Authorization: this.token,
                },
            });

            this.carts = response.data.data;

            this.carts.forEach((cart) => {
                this.total += parseInt(cart.product.price);
            });
        },
        async handleDelete(id) {
            const toast = useToast();

            try {
                await axios.delete(`carts/${id}/delete`, {
                    headers: {
                        Authorization: this.token,
                    },
                });

                this.total = 0;
                this.loadData();
                toast.success("successfully deleted.");
            } catch (error) {
                console.log(error);
            }
        },
        async handleCheckout() {
            const toast = useToast();

            try {
                const response = await axios.post(
                    "checkout/store",
                    {},
                    {
                        headers: {
                            Authorization: this.token,
                        },
                    }
                );

                let id = response.data.data.transaction_id;

                router.push(`transactions/${id}`);
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
