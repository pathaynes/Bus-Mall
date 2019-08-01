import renderProducts from '../src/render-products.js';
import productsData from './data/products.js';
import ProductShuffle from './product-shuffle.js';
import threeRandom from './random.js';
import store from './data/store.js';



const masterProducts = new ProductShuffle(productsData);
const threeProducts = threeRandom(masterProducts.list);
const button = document.getElementById('buttons');
const countSpan = document.getElementById('count-span');
let count = 0;

for(let i = 0; i < threeProducts.length; i++) {
    const product = threeProducts[i];
    const dom = renderProducts(product);
    button.appendChild(dom);
}

button.addEventListener('click', event => {
    store.countClick(event.target.alt);
    count++;
    countSpan.textContent = count;
    // if(count === 25) {
    //     return;
    // }
    while(button.firstChild) {
        button.removeChild(button.firstChild);
    } 
    const threeNew = threeRandom(masterProducts.list);
    for(let i = 0; i < threeNew.length; i++) {
        const product = threeNew[i];
        const dom = renderProducts(product);
        button.appendChild(dom);
    }
});
