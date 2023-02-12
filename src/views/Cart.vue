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
                                        <tr>
                                            <td class="cart-pic first-row">
                                                <img src="images/instagram/insta-1.jpg" alt="" />
                                            </td>
                                            <td class="cart-tittle first-row text-center">
                                                <h5>Pure Pineapple</h5>
                                            </td>
                                            <td class="p-price first-row">$60.00</td>
                                            <td class="delete-item">
                                                <a href=""><font-awesome-icon icon="fa-solid fa-xmark" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="cart-pic first-row">
                                                <img src="images/instagram/insta-1.jpg" alt="" />
                                            </td>
                                            <td class="cart-tittle first-row text-center">
                                                <h5>Pure Pineapple</h5>
                                            </td>
                                            <td class="p-price first-row">$60.00</td>
                                            <td class="delete-item">
                                                <a href=""><font-awesome-icon icon="fa-solid fa-xmark" /></a>
                                            </td>
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
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Alamat Lengkap</label>
                                        <textarea class="form-control" id="address" name="address" rows="3"></textarea>
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
                                    <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                                    <li class="subtotal mt-3">Subtotal <span>$240.00</span></li>
                                    <li class="subtotal mt-3">Pajak <span>10%</span></li>
                                    <li class="subtotal mt-3">Total Biaya <span>$440.00</span></li>
                                    <li class="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                                    <li class="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                                    <li class="subtotal mt-3">Nama Penerima <span>Shayna</span></li>
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
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
    components: {
        Breadcrumb,
    },
};
</script>
