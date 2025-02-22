document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get("id");
    const detalleContainer = document.getElementById("detalle-producto");
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
    const botonComprar = document.getElementById("comprar");
    const botonRegresar = document.getElementById("regresar");

    fetch(`https://fakestoreapi.com/products/${productoId}`)
        .then(response => response.json())
        .then(producto => {
            let nuevoNombre = producto.title;
            let nuevaDescripcion = producto.description;
            let precioFormateado = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(producto.price * 4000);

            if (producto.title.includes("Acer SB220Q")) {
                nuevoNombre = "Monitor Acer 21.5 pulgadas Full HD";
                nuevaDescripcion = "Monitor de 21.5 pulgadas con tecnología IPS, resolución Full HD (1920x1080) y compatibilidad con Radeon FreeSync.";
            } else if (producto.title.includes("Samsung 49-Inch CHG90")) {
                nuevoNombre = "Monitor Samsung Curvo 49 pulgadas QLED 144Hz";
                nuevaDescripcion = "Monitor ultra ancho de 49 pulgadas con frecuencia de actualización de 144Hz y tecnología QLED.";
            }

            detalleContainer.innerHTML = `
                <div class="col-md-6">
                    <img src="${producto.image}" class="img-fluid" alt="${nuevoNombre}">
                </div>
                <div class="col-md-6">
                    <h2>${nuevoNombre}</h2>
                    <p>${nuevaDescripcion}</p>
                    <p class="fw-bold">${precioFormateado}</p>
                </div>
            `;
        })
        .catch(error => console.error("Error al cargar el producto:", error));

    botonComprar.addEventListener("click", function() {
        mensajeConfirmacion.style.display = "block";
        botonRegresar.style.display = "block";
    });

    botonRegresar.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
