import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "dist",
		rollupOptions: {
			input: {
				main: "index.html",
				productList: '/public/productListPage/index.html',
				product: '/public/productPage/index.html',
				blogs: '/public/blogs.html',
				blog: '/public/blog1.html',
			},
		},
	},
	server: {
		port: 8080,
	},
	publicDir: "public",
});