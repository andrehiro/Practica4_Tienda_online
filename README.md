# Practica4_Tienda_online
Andre Alexander Hidrogo Rocha 11/10/2023 Es un ejemplo basico de una tienda enlinea

### Explique cada una de las funciones del código JavaScript
``` javascript
document.addEventListener("DOMContentLoaded", function () {
    const catalogo = [
        { id: "Gatito", imagen: "imagen1.png", precio: 20 },
        { id: "Kirby", imagen: "imagen2.png", precio: 15 },
        { id: "Stich", imagen: "imagen3.png", precio: 25 },
        // Agrega más productos aquí
    ];
```
Catalogo es un array en el cual se declaran y guardan los productos que se venderán en la tienda.
``` javascript

    // Genera las tarjetas de productos en el catálogo
    catalogo.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
    <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="Producto ${producto.id}">
        <div class="card-body">
            <h3 class="card-title">${producto.id}</h3>
            <p class="card-text">$${producto.precio}</p>
            <input type="text" class="card-input" id="cantidadProducto${producto.id}" placeholder="Ingresa la cantidad"/>
            <button class="card-button">Agregar</button>
        </div>
    </div>
`;
        catalogoContainer.appendChild(card);
```
En este método lo que hacemos es que, por cada producto en el catálogo, hacemos que este se muestre en la pagina (imagen, nombre y costo), además de agregarle un botón y un input para comprar el producto y poder escribir la cantidad a comprar.
``` javascript
        // Agrega un evento de clic al botón de "Agregar al Carrito"
        const botonAgregar = card.querySelector("button");
        botonAgregar.addEventListener("click", function () {
            const cantidad = parseInt(document.getElementById(`cantidadProducto${producto.id}`).value);

            if (cantidad > 0) {
                agregarProductoAlCarrito(producto, cantidad);
            }
        });
    });
```
Hacemos que al clicar el botón compremos el producto, es decir que se muestre en el resumen de compra. También le ponemos la condición al botón que solo funcionara si la cantidad de productos a comprar es mayor a 0.
``` javascript
    const carrito = [];

    function agregarProductoAlCarrito(producto, cantidad) {
        // Busca si el producto ya está en el carrito
        const productoEnCarrito = carrito.find((item) => item.producto.id === producto.id);

        if (productoEnCarrito) {
            // Si ya está en el carrito, actualiza la cantidad
            productoEnCarrito.cantidad += cantidad;
        } else {
            // Si no está en el carrito, agrega un nuevo elemento al carrito
            carrito.push({ producto, cantidad });
        }

        // Actualiza el resumen de la compra
        actualizarResumenCompra();
    }
```
Esta es la función que se ejecuta al aplastar el botón anterior, en pocas palabra verifica si ya se encuentra el producto en el carrito de ser así simplemente se suma al a existente y de no ser así se agrega al carrito.
``` javascript
    function actualizarResumenCompra() {
        // Limpia el resumen de compra
        resumenCompra.innerHTML = "";
        let subtotalTotal = 0;

        carrito.forEach((item) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
    <td>${item.producto.id}</td>
    <td class="catidad-producto-tabla">${item.cantidad}</td>
    <td>$${item.producto.precio * item.cantidad}</td>
`;
            resumenCompra.appendChild(fila);

            subtotalTotal += item.producto.precio * item.cantidad;
        });

        // Actualiza el total
        total.textContent = `$${subtotalTotal}`;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
});
```
Este metodo simplemente te muestra el resumen de compra

### En el código js, ¿qué tipo de variable es "catalogo"? ¿Como se manipula?
Es una variable de tipo array. Y se puede manipular accediendo a los objetos y propiedades que contiene. Por ejemplo, para acceder al primer producto en el catálogo y obtener su nombre, puedes hacerlo de la siguiente manera:
``` javascript
const primerProducto = catalogo[0]; 
const nombreDelProducto = primerProducto.id; 

``` 
### ¿Qué hace const card = document.createElement("div") ?
Crea un nuevo elemento HTML por medio de JavaScript. En este caso, se está creando un elemento div y se guarda en la constante card.

### ¿Qué hace card.innerHTML?
Permite acceder y manipular el contenido HTML dentro del elemento card.

### ¿Qué hace catalogoContainer.appendChild(card)?
Se utiliza para agregar un elemento en este caso card como un hijo a otro elemento en este caso catalogoContainer. Es decir que estamos insertando la tarjeta del producto en un contenedor específico de la página web.
