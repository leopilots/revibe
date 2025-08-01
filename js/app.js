// button bar
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-main").classList.toggle("show");
});

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