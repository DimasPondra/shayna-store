<template>
    <main>
        <div class="row d-flex justify-content-center mx-0 my-5">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group mb-3">
                                <label for="email" class="mb-2">
                                    Email
                                    <span class="required">*</span>
                                </label>
                                <input type="email" class="form-control" id="email" v-model="credential.email" />
                            </div>

                            <div class="form-group mb-3">
                                <label for="password" class="mb-2">
                                    Password
                                    <span class="required">*</span>
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    v-model="credential.password"
                                />
                            </div>

                            <div class="d-flex justify-content-end">
                                <button class="btn btn-sm btn-success">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            credential: {
                email: "",
                password: "",
            },
        };
    },
    created() {
        document.title = `Shayna Store - ${this.$route.meta.title}`;
    },
    methods: {
        ...mapActions(useAuthStore, ["login"]),
        async handleSubmit() {
            await this.login(this.credential);
        },
        clearForm() {
            this.credential.email = "";
            this.credential.password = "";
        },
    },
};
</script>

<style scoped>
.required {
    color: red;
}
</style>
