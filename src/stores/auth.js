import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import SecureLS from "secure-ls";
import { useToast } from "vue-toastification";

const secureLS = new SecureLS({
    encodingType: "aes",
    encryptionSecret: "oktafianto",
});

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null,
    }),
    actions: {
        async login(user) {
            const toast = useToast();

            try {
                const response = await axios.post("login", user);
                this.token = "Bearer " + response.data.access_token;

                toast.success("Welcome.");
                router.push("/");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },

        async logout() {
            const toast = useToast();

            try {
                await axios.post("logout", "", {
                    headers: {
                        Authorization: this.token,
                    },
                });

                toast.success("Logged out successfully.");
                this.token = null;
                router.push("/login");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
    },
    persist: {
        key: "token",
        paths: ["token"],
        storage: {
            getItem: (key) => secureLS.get(key),
            setItem: (key, value) => secureLS.set(key, value),
        },
    },
});
