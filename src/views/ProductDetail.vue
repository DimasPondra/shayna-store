<template>
    <Breadcrumb />

    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" src="images/instagram/insta-1.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>oranges</span>
                                    <h3>Pure Pineapple</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error
                                        officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum
                                        iure natus quos non a sequi, id accusantium! Autem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam
                                        animi, commodi, nihil voluptate nostrum neque architecto illo officiis
                                        doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita
                                        animi nulla aspernatur. Id asperiores blanditiis, omnis repudiandae iste
                                        inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit
                                        perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil
                                        dolores. Commodi ratione distinctio harum voluptatum velit facilis voluptas
                                        animi non laudantium, id dolorem atque perferendis enim ducimus? A
                                        exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                        impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit
                                        architecto?
                                    </p>
                                    <h4>$495.00</h4>
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

export default {
    components: {
        Breadcrumb,
        ProductRelated,
    },
};
</script>
