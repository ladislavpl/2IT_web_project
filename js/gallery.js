const images = [
  { src: './img/cars/alpine.webp', caption: 'Alpine' },
  { src: './img/cars/astonmartin.webp', caption: 'Aston Martin' },
  { src: './img/cars/audi.webp', caption: 'Audi' },
  { src: './img/cars/cadillac.webp', caption: 'Cadillac' },
  { src: './img/cars/ferrari.webp', caption: 'Ferrari' },
  { src: './img/cars/haas.webp', caption: 'Haas' },
  { src: './img/cars/mclaren.webp', caption: 'McLaren' },
  { src: './img/cars/mercedes.webp', caption: 'Mercedes' },
  { src: './img/cars/racingbulls.webp', caption: 'Racing Bulls' },
  { src: './img/cars/redbull.webp', caption: 'Red Bull' },
  { src: './img/cars/williams.webp', caption: 'Williams' }
];
 
let i = 0;
const img = document.getElementById('img');
const caption = document.getElementById('caption');
 
function show() {
  img.src = images[i].src;
  img.alt = images[i].caption;
  caption.textContent = images[i].caption;

  const preload = new Image();
  preload.src = images[(i + 1) % images.length].src;
}
 
function prev() { i = (i - 1 + images.length) % images.length; show(); }
function next() { i = (i + 1) % images.length; show(); }
 
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
});
 
show();