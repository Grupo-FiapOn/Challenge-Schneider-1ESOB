window.addEventListener('DOMContentLoaded', event => {

    // Função para encolher a barra de navegação
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Encolher a barra de navegação 
    navbarShrink();

    // Encolher a barra de navegação quando a página é rolada
    document.addEventListener('scroll', navbarShrink);

    // Ativar o Scrollspy do Bootstrap no elemento de navegação principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Recolher a barra de navegação responsiva quando o "toggler" é visível
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Ativar o plugin SimpleLightbox para itens do portfólio
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
