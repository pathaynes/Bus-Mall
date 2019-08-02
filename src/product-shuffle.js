import randomItem from './random.js';
import store from './data/store.js';

class ProductShuffle {
    constructor(products) {
        this.list = products.slice();
    }
    
    getRandomProducts() {
        const newProducts = store.getProducts();
        const threeRad = randomItem(newProducts);
        
        return threeRad;
    }
    
    removeById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId) {
                list.splice(i, 1);
                return;
            }
        }
    }
    hasProduct() {
        return this.list.length > 0;
    }
}
export default ProductShuffle;