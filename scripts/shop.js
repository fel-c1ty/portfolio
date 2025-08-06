fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // Access parent div from DOM
        const parentDiv = document.getElementById('products');
        for (const item of data) {
            // Create product div
            const productDiv = document.createElement('div');
            // Create a product img and add to div
            const productImg = document.createElement('img');
            productImg.setAttribute('src', item.image);
            productImg.setAttribute('alt', item.title);
            productDiv.appendChild(productImg);
            // Create produt title with h1 and append to div
            const productTitle = document.createElement('h1');
            productTitle.innerText = item.title;
            productDiv.appendChild(productTitle);
            // Append product div to parent div
            parentDiv.appendChild(productDiv);
        }
    });