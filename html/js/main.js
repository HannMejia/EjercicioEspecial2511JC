document.getElementById('loadProducts').addEventListener('click', function() { //Vinculando boton con id loadProducts y agregando función a evento click
    fetch('https://fakestoreapi.com/products') //Utilizando método fetch
        .then(response => response.json()) //Convertir los datos obtenidos a un formato JSON
        .then(data => { //Indicar qué se hace con los datos ya en formato JSON
            const productContainer = document.getElementById('productContainer');
            productContainer.innerHTML = ''; 
            data.slice(0, 9).forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" />
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p><strong>Price:</strong> $${product.price}</p>
                `;
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
});
