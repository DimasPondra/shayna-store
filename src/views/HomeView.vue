<template>
    <main>
        <Product />
        <Instagram />
    </main>
</template>

<script>
import Product from "../components/Product.vue";
import Instagram from "../components/Instagram.vue";

export default {
    components: {
        Product,
        Instagram,
    },
};
</script>
