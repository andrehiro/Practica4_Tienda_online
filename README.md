# Practica4_Tienda_online
Andre Alexander Hidrogo Rocha 11/10/2023 Es un ejemplo basico de una tienda enlinea

``` javascript
document.addEventListener("DOMContentLoaded", function () {
    const catalogo = [
        { id: "Gatito", imagen: "imagen1.png", precio: 20 },
        { id: "Kirby", imagen: "imagen2.png", precio: 15 },
        { id: "Stich", imagen: "imagen3.png", precio: 25 },
        // Agrega más productos aquí
    ];
```
hola
``` javascript

    const botonfinalizarCompra = document.getElementById("finalizarCompra");
    const catalogoContainer = document.getElementById("catalogo");
    const resumenCompra = document.getElementById("resumenCompra");
    const total = document.getElementById("total");

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

        // Agrega un evento de clic al botón de "Agregar al Carrito"
        const botonAgregar = card.querySelector("button");
        botonAgregar.addEventListener("click", function () {
            const cantidad = parseInt(document.getElementById(`cantidadProducto${producto.id}`).value);

            if (cantidad > 0) {
                agregarProductoAlCarrito(producto, cantidad);
            }
        });
    });

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
    botonfinalizarCompra.addEventListener("click", function (event) {
        localStorage.setItem('total', total.textContent);
        window.location.href = "ticket.html";
    });
});

```
