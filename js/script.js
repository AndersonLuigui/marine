function initCarousel(carousel) {
  const images = carousel.querySelectorAll('img');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');

  if (images.length <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }

  showImage(currentIndex);
}

// Inicializa todos os carrosséis da página
document.querySelectorAll('.carousel').forEach(initCarousel);

document.getElementById("reserva-form").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o envio padrão do form

  const lanchaNome = "Cimitarra 34"; // você pode mudar dinamicamente se quiser
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if (!data || !hora) {
    alert("Por favor, selecione data e hora!");
    return;
  }

  const numeroTelefone = "5561991432674";
  const mensagem = encodeURIComponent(
    `Olá! Gostaria de alugar a ${lanchaNome} na data ${data} às ${hora}.`
  );

  const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
  window.open(linkWhatsApp, "_blank");
});
