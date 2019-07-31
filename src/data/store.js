import productsData from './products.js';

const PRODUCTS_KEY = 'PRODUCTS';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(PRODUCTS_KEY);
        if(!products) {
            store.save(PRODUCTS_KEY, productsData);
            products = productsData;
        }
        return products;
    }
};

export default store;