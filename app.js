document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-results input");
    const filterButtons = document.querySelectorAll(".filter-button");
    const cardContainers = document.querySelectorAll(".card-container .card");

    
    function filterCards(category) {
        cardContainers.forEach((card) => {
            card.style.display = "none";
            if (card.classList.contains(category) || category === "todos") {
                card.style.display = "block";
            }
        });
    }

    
    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const category = this.id;
            filterCards(category);
        });
    });

   
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

    
    document.querySelector(".search-results button").addEventListener("click", searchBooks);

    
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

    
    function filtrarTarjetasPorCategoria(categoria) {
        cards.forEach(card => {
            if (categoria === null || card.id === categoria) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filtrarTarjetasPorCategoria(category);
        });
    });

    
    mostrarTodasLasTarjetas();
});


