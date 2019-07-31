import productsData from './products.js';

const PRODUCTS_KEY = 'PRODUCTS';

const store = {
    storage: window.localStorage,
    save(key, Item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    }
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    }
};