<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div
                v-for="(carousel, index) in carousels"
                :key="carousel.id"
                class="carousel-item"
                :class="index == 0 ? 'active' : ''"
            >
                <img :src="carousel.file.url" class="d-block w-100 img-carousel" alt="image-carousel" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ carousel.name }}</h5>
                    <p>{{ carousel.description }}</p>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import "@popperjs/core";
import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";

export default {
    mounted() {
        new bootstrapBundle.Carousel(document.getElementById("carouselExampleControls"));
    },
    props: {
        carousels: Array,
    },
};
</script>

<style scoped>
.img-carousel {
    height: 500px;
    object-fit: cover;
}
</style>
