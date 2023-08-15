import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/admin",
    server: {
        host: "127.0.0.1",
        port: 3000,

        proxy: {
            "/admin-api": {
                target: "https://beta2.arzan.info",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin-api/, "/admin"),
            },
            "/admin/static": {
                target: "https://beta2.arzan.info",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin\/static/, "/static"),
            },
            "/video": {
                target: "https://beta2.arzan.info",
                changeOrigin: true,
            },
            "/api/v1": {
                target: "https://beta2.arzan.info",
                changeOrigin: true,
            },
        },
    },
});
