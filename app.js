document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-results input");
    const filterButtons = document.querySelectorAll(".filter-button");
    const cardContainers = document.querySelectorAll(".card-container .card");

    // Función para filtrar las tarjetas según la categoría
    function filterCards(category) {
        cardContainers.forEach((card) => {
            card.style.display = "none";
            if (card.classList.contains(category) || category === "todos") {
                card.style.display = "block";
            }
        });
    }

    // Escucha el evento de clic en los botones de filtro
    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const category = this.id;
            filterCards(category);
        });
    });

    // Función para buscar libros por nombre
    function searchBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        cardContainers.forEach((card) => {
            const bookTitle = card.querySelector("h2").textContent.toLowerCase();
            if (bookTitle.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Escucha el evento de clic en el botón de búsqueda
    document.querySelector(".search-results button").addEventListener("click", searchBooks);

    // Escucha el evento de entrada en el campo de búsqueda
    searchInput.addEventListener("input", searchBooks);
});

// SIDEBAR 

document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia a los botones de filtro
    const filterButtons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.card');

    // Función para mostrar todas las tarjetas
    function mostrarTodasLasTarjetas() {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }

    // Función para mostrar tarjetas basadas en la categoría seleccionada
    function filtrarTarjetasPorCategoria(categoria) {
        cards.forEach(card => {
            if (categoria === null || card.id === categoria) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Agrega un manejador de clic a cada botón
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filtrarTarjetasPorCategoria(category);
        });
    });

    // Mostrar todas las tarjetas al cargar la página
    mostrarTodasLasTarjetas();
});


