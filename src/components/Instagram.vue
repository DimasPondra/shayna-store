<template>
    <div class="instagram-photo">
        <div class="insta-item" :style="image">
            <div class="inside-text">
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <h5><a href="">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item" :style="image">
            <div class="inside-text">
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <h5><a href="">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item" :style="image">
            <div class="inside-text">
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <h5><a href="">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item" :style="image">
            <div class="inside-text">
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <h5><a href="">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item" :style="image">
            <div class="inside-text">
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <h5><a href="">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item" :style="image">
            <div class="inside-text">
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <h5><a href="">shayna_gallery</a></h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: {
                backgroundImage: "url(https://vuejs.org/images/logo.png)",
            },
        };
    },
};
</script>
