import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "127.0.0.1",
        port: 3000,

        proxy: {
            "/admin-api": {
                target: "http://10.15.0.76:8081",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin-api/, "/admin"),
            },
            "/admin/static": {
                target: "http://10.15.0.76:8081",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin\/static/, "/static"),
            },
            "/api/v1": {
                target: "http://10.15.0.76:8081",
                changeOrigin: true,
            },
        },
    },
});
