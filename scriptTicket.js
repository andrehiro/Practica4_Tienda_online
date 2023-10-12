document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    const total = localStorage.getItem('total');
    const tablaCarrito = document.getElementById('tablaCarrito');
    // Haz lo que necesites con los datos en la página de destino
    // Por ejemplo, muestra el carrito y el total en la página de confirmación

    const tabla = document.createElement('table');
        tabla.classList.add('table'); // Puedes aplicar estilos CSS aquí si es necesario
        tabla.innerHTML = `
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <td colspan="2"><strong>Total:</strong></td>
                    <td>${total}</td>
                </tr>
            </tfoot>
        `;

        const tbody = tabla.querySelector('tbody');

        carrito.forEach((item) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${item.producto.id}</td>
                <td class="catidad-producto-tabla"> ${item.cantidad}</td>
                <td>$${item.producto.precio * item.cantidad}</td>
            `;
            tbody.appendChild(fila);
        });

        tablaCarrito.appendChild(tabla);

});