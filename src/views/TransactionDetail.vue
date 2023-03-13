<template>
    <Breadcrumb title="Transaction Detail" />

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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="detail in transaction.transaction_details" :key="detail">
                                            <td class="cart-pic first-row">
                                                <img :src="detail.product_file_url" alt="" />
                                            </td>
                                            <td class="cart-tittle first-row text-center">
                                                <h5>{{ detail.product_name }}</h5>
                                            </td>
                                            <td class="p-price first-row">{{ detail.price }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <h4 class="mb-4">Informasi Pembeli:</h4>
                            <div class="user-checkout">
                                <form action="">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Masukkan Nama"
                                            :value="transaction.user.name"
                                            disabled
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Masukkan Email"
                                            :value="transaction.user.email"
                                            disabled
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">No. HP</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="Masukkan No. HP"
                                            :value="transaction.user.phone"
                                            disabled
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Alamat Lengkap</label>
                                        <textarea
                                            class="form-control"
                                            id="address"
                                            name="address"
                                            rows="3"
                                            :value="transaction.user.address"
                                            disabled
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="proceed-checkout">
                                <ul>
                                    <li class="subtotal">
                                        ID
                                        <span
                                            ><small>{{ transaction.uuid }}</small></span
                                        >
                                    </li>
                                    <li class="subtotal mt-3">
                                        Subtotal <span>{{ transaction.sub_total }}</span>
                                    </li>
                                    <li class="subtotal mt-3">
                                        Total Biaya <span>{{ transaction.total }}</span>
                                    </li>
                                    <li class="subtotal mt-3">
                                        Bank Transfer <span>{{ bank_account.bank.name }}</span>
                                    </li>
                                    <li class="subtotal mt-3">
                                        No. Rekening <span>{{ bank_account.number }}</span>
                                    </li>
                                    <li class="subtotal mt-3">
                                        Nama Penerima <span>{{ bank_account.name }}</span>
                                    </li>
                                </ul>
                                <a href="" class="proceed-btn">I ALREADY PAID</a>
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

export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            transaction: {
                id: null,
                uuid: null,
                sub_total: "",
                total: "",
                status: "",
                user: {
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                },
                transaction_details: [],
            },
            bank_account: {
                name: "",
                number: "",
                bank: {
                    name: "",
                },
            },
        };
    },
    computed: {
        params: function () {
            return {
                include: "user,transaction_details",
            };
        },
        ...mapState(useAuthStore, ["token"]),
    },
    created() {
        this.loadData();
        this.loadBankAccount();
        document.title = `Shayna Store - ${this.$route.meta.title}`;
    },
    methods: {
        async loadData() {
            const response = await axios.get(`transactions/${this.$route.params.id}/show`, {
                params: this.params,
                headers: {
                    Authorization: this.token,
                },
            });

            this.transaction = response.data.data;
        },
        async loadBankAccount() {
            const response = await axios.get("bank-accounts/active-status", {
                params: {
                    include: "bank",
                },
                headers: {
                    Authorization: this.token,
                },
            });

            this.bank_account = response.data.data;
        },
    },
};
</script>
