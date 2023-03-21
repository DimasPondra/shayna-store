<template>
    <Breadcrumb title="Transaction" />

    <section class="shopping-cart">
        <div class="container">
            <div class="row">
                <div class="list-group">
                    <RouterLink
                        :to="`transactions/${transaction.id}`"
                        class="list-group-item list-group-item-action"
                        v-for="transaction in transactions"
                        :key="transaction.id"
                    >
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{ transaction.uuid }}</h5>
                            <small v-if="transaction.status == 'success'" class="text-success">{{
                                transaction.status
                            }}</small>
                            <small v-else-if="transaction.status == 'pending'" class="text-warning">{{
                                transaction.status
                            }}</small>
                            <small v-else class="text-danger">{{ transaction.status }}</small>
                        </div>
                        <small>{{ transaction.total }}</small>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import Breadcrumb from "../components/Breadcrumb.vue";
import { useTransactionStore } from "../stores/transactions";

export default {
    components: {
        Breadcrumb,
    },
    computed: {
        ...mapState(useTransactionStore, ["transactions"]),
    },
    created() {
        document.title = `Shayna Store - ${this.$route.meta.title}`;
        this.loadTransactions();
    },
    methods: {
        ...mapActions(useTransactionStore, ["get"]),
        async loadTransactions() {
            await this.get();
        },
    },
};
</script>
