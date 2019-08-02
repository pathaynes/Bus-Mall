import renderProducts from '../src/render-products.js';

const test = QUnit.test;

QUnit.module('Three-Random');

test('Render-product', assert => {
    const products = 
        {
            id: 'usb',
            name: 'USB',
            image: 'assets/usb.gif'
        };
   
    const expected = '<button><img class="image" src="assets/usb.gif"></button>';

    const dom = renderProducts(products);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});