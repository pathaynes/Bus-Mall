function renderProducts(products) {
    const button = document.createElement('button');
    const img = document.createElement('img');
    
    img.className = 'image';
    img.src = products.image;
    button.appendChild(img);
    
    return button;
}

export default renderProducts;