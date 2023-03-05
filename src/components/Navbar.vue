<template>
    <header>
        <nav class="container navbar navbar-expand-lg bg-none">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/images/logo_website_shayna.png" alt="" srcset="" />
                </a>
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
                            <RouterLink to="/" class="nav-link active">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/products" class="nav-link">Product</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/login" class="nav-link">Login</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/cart" class="nav-link">Cart</RouterLink>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
