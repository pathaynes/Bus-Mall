import store from '../src/data/store.js';
import productsData from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => { 
    store.storage.clear();
});

test('basic get and save', (assert) => {
    const key = 'dog';
    const dog = { name: 'Kenobi' };
    
    store.save(key, dog);
    const got = store.get(key);

    assert.deepEqual(got, dog);
});

test('bootstrap products from inventory', (assert) => {
    const key = 'products';

    store.save(key, name);
    const got = store.getProducts();

    assert.deepEqual(got, productsData);
});