// zoom de imágenes
const zoomableImages = document.querySelectorAll('.zoomable');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

zoomableImages.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
});

// barra de búsqueda y filtro de productos
const searchInput = document.querySelector('.barra-busqueda input');
const searchButton = document.querySelector('.barra-busqueda button');
const categorySelect = document.getElementById('categoria');
const products = document.querySelectorAll('.product');

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  products.forEach(product => {
    const name = product.querySelector('.info-product p strong').innerText.toLowerCase();
    const category = product.dataset.categoria;

    const matchesSearch = name.includes(searchText);
    const matchesCategory = !selectedCategory || category === selectedCategory;

    if (matchesSearch && matchesCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Filtrar al hacer clic en buscar
searchButton.addEventListener('click', filterProducts);

// Filtrar al escribir
// searchInput.addEventListener('input', filterProducts);

// Filtrar al cambiar categoría
categorySelect.addEventListener('change', filterProducts);