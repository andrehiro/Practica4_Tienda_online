document.addEventListener("DOMContentLoaded", function () {
    const catalogo = [
        { id: "Gatito", imagen: "https://m.media-amazon.com/images/I/6192+1qwSqL._AC_SY300_SX300_.jpg", precio: 20 },
        { id: "Kirby", imagen: "https://m.media-amazon.com/images/I/71CWyOJOOVL.__AC_SY300_SX300_QL70_ML2_.jpg", precio: 15 },
        { id: "Stich", imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/7a2009d5-df64-4537-a164-54ad27f0b3b0.6179bcb7d08d04f39a6bcf2b9cd75afd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", precio: 20 },
        { id: "Osito", imagen: "data:image/jpeg;base64,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", precio: 10 },
        { id: "Squirtle", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TS_VcokuDHBNlJraV7DFCIPhLCScbbk5hg&usqp=CAU", precio: 25 },
        { id: "Pikachu", imagen: "https://cdn.gameplanet.com/wp-content/uploads/2022/11/14185957/191726402442-peluche-pikachu-pokemon-1-1.jpg", precio: 10 },
        { id: "Charmander", imagen: "https://cdn.gameplanet.com/wp-content/uploads/2022/11/15113257/191726379584-peluche-charmander-pokemon-1-2.jpg", precio: 20 },
        { id: "Mudkip", imagen: "https://http2.mlstatic.com/D_NQ_NP_762428-MLM26234238925_102017-O.webp", precio: 40 },
        // Agrega más productos aquí
    ];

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