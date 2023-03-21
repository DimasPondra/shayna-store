<template>
    <header>
        <nav class="container navbar navbar-expand-lg bg-none">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand"
                    ><img src="../assets/images/logo_website_shayna.png" alt="logo"
                /></RouterLink>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <RouterLink
                                to="/"
                                class="nav-link"
                                :class="this.$route.meta.name_page == 'home' ? 'active' : ''"
                                >Home</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                to="/products"
                                class="nav-link"
                                :class="this.$route.meta.name_page == 'products' ? 'active' : ''"
                                >Product</RouterLink
                            >
                        </li>
                    </ul>
                    <ul class="navbar-nav" v-if="token == null">
                        <li class="nav-item">
                            <RouterLink
                                to="/login"
                                class="nav-link"
                                :class="this.$route.meta.name_page == 'login' ? 'active' : ''"
                                >Login</RouterLink
                            >
                        </li>
                    </ul>
                    <ul class="navbar-nav" v-else>
                        <li class="nav-item">
                            <RouterLink
                                to="/cart"
                                class="nav-link"
                                :class="this.$route.meta.name_page == 'cart' ? 'active' : ''"
                                >Cart</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                to="/transactions"
                                class="nav-link"
                                :class="this.$route.meta.name_page == 'transactions' ? 'active' : ''"
                                >Transaction</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <button @click="handleLogout" class="nav-link border-0 bg-white">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    computed: {
        ...mapState(useAuthStore, ["token"]),
    },
    methods: {
        ...mapActions(useAuthStore, ["logout"]),
        handleLogout() {
            this.logout();
        },
    },
};
</script>
