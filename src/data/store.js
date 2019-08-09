import productsData from './products.js';
import count from './count.js';
import view from './view.js';

const PRODUCTS_KEY = 'PRODUCTS';
const COUNT_RESULTS = 'count';
const VIEWS_RESULTS = 'view';

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
    },
    countClick(id) {
        const localCount = store.get('count');
        if(!localCount) store.save('count', count);
        localCount[id]++;
        store.save('count', localCount);
    },
    countView(id) {
        const localView = store.get('view');
        if(!localView) store.save('view', view);
        localView[id]++;
        store.save('view', localView);
    },
    getCountClick() {
        const clickGraph = store.get(COUNT_RESULTS);
        return clickGraph || [];
    },
    getCountViews() {
        const viewGraph = store.get(VIEWS_RESULTS);
        return viewGraph || [];
    },
};

export default store;