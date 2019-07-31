import productData from '../src/data/products.js';
import ProductShuffle from '../src/product-shuffle.js';

const test = QUnit.test;

QUnit.module('Three-Random');

test('Generates three products', assert => {
    const productShuffle = new ProductShuffle(productData);
    const expected = productShuffle.getRandomProducts();
    assert.equal(expected.length, 3);
    assert.notDeepEqual(expected[0], expected[1]);
});
