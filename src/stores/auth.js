import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import SecureLS from "secure-ls";

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
            try {
                const response = await axios.post("login", user);
                this.token = "Bearer " + response.data.access_token;

                router.push("/");
            } catch (error) {
                console.log(error);
            }
        },

        async logout() {
            try {
                await axios.post("logout", "", {
                    headers: {
                        Authorization: this.token,
                    },
                });

                this.token = null;
                router.push("/login");
            } catch (error) {
                console.log(error);
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
