import renderProducts from '../src/render-products.js';
import productsData from './data/products.js';
import ProductShuffle from './product-shuffle.js';
import randomItem from './random.js';
import store from './data/store.js';

const masterProducts = new ProductShuffle(productsData);
const button = document.getElementById('buttons');
const countSpan = document.getElementById('count-span');
const buttonContainer = document.getElementById('button-container');
let count = 0;
let previousArray = [];

for(let i = 0; i < 3; i++) {
    const product = randomItem(masterProducts.list);
    store.countView(product.id);
    const dom = renderProducts(product);
    button.appendChild(dom);
}

button.addEventListener('click', event => {
    store.countClick(event.target.alt);
    count++;
    countSpan.textContent = count;
    while(button.firstChild) {
        button.removeChild(button.firstChild);
    } 
    
    let currentArray = [];
    while(currentArray.length < 3) {
        const product = randomItem(masterProducts.list);
        store.countView(product.id);
        if(!currentArray.includes(product) && !previousArray.includes(product)) {
            currentArray.push(product);
        }
    }
        
    for(let i = 0; i < currentArray.length; i++){
        const product = currentArray[i];
        previousArray[i] = product;
        const dom = renderProducts(product);
        button.appendChild(dom);
    }
    if(count >= 25) {
        buttonContainer.classList.add('hidden');
    }
});
