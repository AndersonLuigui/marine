document.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContentLoaded disparado!'); // Log para confirmar carregamento

    // Menu Hamburger
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (!hamburger || !navLinks) {
        console.error('Erro: hamburger ou nav-links não encontrados!');
    } else {
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");
            console.log('Hamburger clicado! Menu agora:', navLinks.classList.contains('active') ? 'aberto' : 'fechado');
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                console.log('Link clicado, menu fechado');
            });
        });

        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
                navLinks.classList.remove("active");
                console.log('Clique fora, menu fechado');
            }
        });
    }

    // Função do Carrossel
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

    // Inicializa carrosséis
    document.querySelectorAll('.carousel').forEach(carousel => {
        console.log('Inicializando carrossel:', carousel); // Log para depurar
        initCarousel(carousel);
    });

    // Manipulação do Formulário
    const reservaForm = document.getElementById("reserva-form");
    if (reservaForm) {
        reservaForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const lanchaNome = "Cimitarra 34";
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
            console.log('Formulário enviado, WhatsApp aberto');
        });
    } else {
        console.log('Formulário reserva-form não encontrado na página');
    }
});

// Função para enviar mensagem no WhatsApp
function enviarMenssagem(lanchaNome) {
    const numeroTelefone = "5561991432674"; // coloque aqui o número do dono da lancha (com DDI 55 e DDD)
    const mensagem = encodeURIComponent(`Olá! Tenho interesse em alugar a ${lanchaNome}. Pode me passar mais informações?`);

    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
    window.open(linkWhatsApp, "_blank"); // abre em nova aba
}

function contatoParcerias() {
    const numeroTelefone = "5561991432674"; // coloque aqui o número do dono da lancha (com DDI 55 e DDD)
    const mensagem = encodeURIComponent(`  "Olá! Cheguei até você pelo site Marine Go BSB e tenho interesse em discutir uma parceria. Você teria um horário para conversarmos?`);

    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
    window.open(linkWhatsApp, "_blank"); // abre em nova aba
}