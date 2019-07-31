import renderProducts from '../src/render-products.js';
import productsData from './data/products.js';
import ProductShuffle from './product-shuffle.js';
import threeRandom from './random.js';

//randomly generate 3 products
const masterProducts = new ProductShuffle(productsData);
const threeProducts = threeRandom(masterProducts.list);
const button = document.getElementById('buttons');

//loop through our three products
//render 3 products
//create the buttons using the rendering function for each item
//append each button to "buttons" node
//attach event listener to buttons

for(let i = 0; i < threeProducts.length; i++) {
    const product = threeProducts[i];
    const dom = renderProducts(product);
    button.appendChild(dom);
}
