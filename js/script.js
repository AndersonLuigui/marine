document.querySelectorAll('.card').forEach(card => {
  const carousel = card.querySelector('.carousel');
  if (!carousel) return; 

  const images = carousel.querySelectorAll('img');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  // Se só tem 1 imagem, esconde os botões e não cria slide
  if (images.length <= 1) {
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
    return;
  }

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex); 
});


function enviarMenssagem(itemText) {
  const numeroTelefone = '5561991432674'; 
  const mensagem = encodeURIComponent(`Olá tudo bem! Vim pelo site e tenho interesse em alugar a ${itemText}`);
  const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
  window.open(linkWhatsApp, "_blank"); 
}

function mudarSlide(button, direction) {
  const carousel = button.parentElement; // pega o carrossel do card
  const images = carousel.querySelectorAll("img");
  let activeIndex = [...images].findIndex(img => img.classList.contains("active"));

  images[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + direction + images.length) % images.length;
  images[activeIndex].classList.add("active");
}