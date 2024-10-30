$(document).ready(function() {
    // Toggle do menu mobile
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Exibir e fechar o carrinho
    document.getElementById('cart_btn').addEventListener('click', function() {
        document.getElementById('cart_tab').style.display = 'block';
    });

    document.getElementById('close_cart').addEventListener('click', function() {
        document.getElementById('cart_tab').style.display = 'none';
    });

    // Realçar seção ativa no menu ao rolar a página
    const section = $('section');
    const nav_item = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        header.css('box-shadow', scrollPosition <= 0 ? 'none' : '5px 1px 5px rgba(0, 0, 0, 0.1)');

        section.each(function(i) {
            const sec = $(this);
            const sectionTop = sec.offset().top - 96;
            const sectionBottom = sectionTop + sec.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        nav_item.removeClass('active');
        $(nav_item[activeSectionIndex]).addClass('active');
    });

    // Animações de rolagem
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    // Controle do formulário de comentários
    let commentCount = 0; // Contador de comentários

    $('#open-comment-form').on('click', function() {
        $('#comment-form').toggle(); // Alterna a visibilidade do formulário
    });

    $('#submit-comment').on('click', function() {
        // Obtém o nome e o comentário
        const name = $('#comment-name').val() || 'Usuário Anônimo';
        const comment = $('#comment-text').val();

        // Verifica se o campo de comentário está preenchido
        if (comment) {
            if (commentCount < 5) { // Verifica se o limite de comentários foi atingido
                // Adiciona o novo comentário na lista de feedbacks
                $('#feedbacks').append(`
                    <div class="feedback">
                        <img src="avatar.png" class="feedback-avatar" alt="">
                        <div class="feedback-content">
                            <p>${name} <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </span></p>
                            <p>"${comment}"</p>
                        </div>
                    </div>
                `);

                // Incrementa o contador
                commentCount++;

                // Limpa os campos de texto
                $('#comment-name').val('');
                $('#comment-text').val('');

                // Exibe uma mensagem de sucesso
                alert('Comentário adicionado! Você ainda pode adicionar mais ' + (5 - commentCount) + ' comentários.');

                // Oculta o formulário após o envio, se 5 comentários já foram adicionados
                if (commentCount >= 5) {
                    $('#comment-form').hide();
                }
            } else {
                alert('Você já adicionou 5 comentários. Não é possível adicionar mais.');
            }
        } else {
            alert('Por favor, escreva um comentário antes de enviar.');
        }
    });
});

