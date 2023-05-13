import { baseURL } from "./baseURL";

export const getAllProducts = async () => {
    const url = `${baseURL}/api/products/all-products`;
    const response = await fetch(url);
    const products = await response.json();
    if (response.ok) {
        return products;
    } else {
        throw products
    }
}


export const getProduct = async (productId) => {
    console.log(productId);
    const url = `${baseURL}/api/products/product/${productId}/`;
    const response = await fetch(url);
    const product = await response.json();
    if (response.ok) {
        return product;
    } else {
        throw product
    }
}