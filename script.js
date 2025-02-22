document.addEventListener("DOMContentLoaded", function() {
    const productosContainer = document.getElementById("productos");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            const productosTecnologia = data.filter(producto => producto.category === "electronics");

            productosTecnologia.forEach(producto => {
                let nuevoNombre = producto.title;
                let nuevaDescripcion = producto.description;
                let precioFormateado = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(producto.price * 4000); // Conversión aproximada

                // Traducción de productos
                if (producto.title.includes("Acer SB220Q")) {
                    nuevoNombre = "Monitor Acer 21.5 pulgadas Full HD";
                    nuevaDescripcion = "Monitor de 21.5 pulgadas con tecnología IPS, resolución Full HD (1920x1080) y compatibilidad con Radeon FreeSync.";
                } else if (producto.title.includes("Samsung 49-Inch CHG90")) {
                    nuevoNombre = "Monitor Samsung Curvo 49 pulgadas QLED 144Hz";
                    nuevaDescripcion = "Monitor ultra ancho de 49 pulgadas con frecuencia de actualización de 144Hz y tecnología QLED.";
                } else if (producto.title.includes("WD 2TB Elements Portable External Hard Drive")) {
                    nuevoNombre = "Disco Duro Externo WD 2TB USB 3.0";
                    nuevaDescripcion = "Compatible con USB 3.0 y USB 2.0, ofrece transferencias de datos rápidas, gran capacidad y mejora el rendimiento del PC.";
                } else if (producto.title.includes("SanDisk SSD PLUS 1TB Internal SSD")) {
                    nuevoNombre = "SSD Interno SanDisk PLUS 1TB SATA III";
                    nuevaDescripcion = "Mejora la velocidad de arranque y respuesta de aplicaciones con una unidad de estado sólido rápida y confiable.";
                } else if (producto.title.includes("Silicon Power 256GB SSD 3D NAND A55")) {
                    nuevoNombre = "SSD Silicon Power 256GB 3D NAND A55";
                    nuevaDescripcion = "Unidad de almacenamiento SSD con tecnología 3D NAND que ofrece alta velocidad de transferencia y gran rendimiento.";
                }

                const productoHTML = `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <img src="${producto.image}" class="card-img-top" alt="${nuevoNombre}">
                            <div class="card-body">
                                <h5 class="card-title">${nuevoNombre}</h5>
                                <p class="card-text">${nuevaDescripcion.substring(0, 100)}...</p>
                                <p class="fw-bold">${precioFormateado}</p>
                                <a href="detalle.html?id=${producto.id}" class="btn btn-primary">Ver Detalles</a>
                            </div>
                        </div>
                    </div>
                `;
                productosContainer.innerHTML += productoHTML;
            });
        })
        .catch(error => console.error("Error al cargar los productos:", error));
});
