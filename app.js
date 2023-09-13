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




