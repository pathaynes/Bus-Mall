import renderProducts from '../src/render-products.js';
import productsData from './data/products.js';
import ProductShuffle from './product-shuffle.js';
import threeRandom from './random.js';
import store from './data/store.js';


const masterProducts = new ProductShuffle(productsData);
const threeProducts = threeRandom(masterProducts.list);
const button = document.getElementById('buttons');


for(let i = 0; i < threeProducts.length; i++) {
    const product = threeProducts[i];
    const dom = renderProducts(product);
    button.appendChild(dom);
}

button.addEventListener('click', event => {
    store.countClick(event.target.alt);
});
//user selects option
//button clicked generates three new options