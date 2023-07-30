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
                target: "http://127.0.0.1:8081",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin-api/, "/admin"),
            },
            "/admin/static": {
                target: "http://127.0.0.1:8081",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin\/static/, "/static"),
            },
            "/video": {
                target: "http://127.0.0.1:8081",
                changeOrigin: true,
            },
            "/api/v1": {
                target: "http://127.0.0.1:8081",
                changeOrigin: true,
            },
        },
    },
});