import store from '../src/data/store.js';

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