document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    document.documentElement.style.scrollSnapType = 'none';

    target.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      document.documentElement.style.scrollSnapType = 'y mandatory';
    }, 1000);
  });
});