
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
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

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});



// Gráfico 1: Proporção de pessoas com insegurança alimentar por região
var chart1 = new Chart(document.getElementById('chart1'), {
    type: 'pie',
    data: {
        labels: ['África', 'Ásia', 'América Latina', 'América do Norte', 'Europa'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: ['rgb(255, 128, 0)', 'rgb(255, 153, 51)', 'rgb(255, 178, 102)', 'rgb(255, 204, 153)', 'rgb(255, 230, 204)']
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Proporção de pessoas com insegurança alimentar por região'
        }
    }
});

// Gráfico 2: Evolução da insegurança alimentar em países específicos

var chart2 = new Chart(document.getElementById('chart2'), {
    type: 'line',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
        datasets: [{
            label: 'País A',
            data: [20, 22, 18, 17, 16, 15],
            borderColor: 'RGB(128, 128, 128)',
            fill: false
        }, {
            label: 'País B',
            data: [15, 16, 14, 12, 10, 9],
            borderColor: 'RGB(0, 0, 0)',
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Evolução da insegurança alimentar em países específicos'
        }
    }
});

// Gráfico 3: Principais causas da insegurança alimentar
var chart3 = new Chart(document.getElementById('chart3'), {
    type: 'bar',
    data: {
        labels: ['Pobreza', 'Conflitos', 'Mudanças climáticas', 'Má governança', 'Acesso limitado a recursos'],
        datasets: [{
            label: 'Problemas da Fome',
            data: [40, 30, 15, 10, 5],
            backgroundColor: ['rgb(255, 128, 0)', 'rgb(255, 153, 51)', 'rgb(255, 178, 102)', 'rgb(255, 204, 153)', 'rgb(255, 230, 204)']
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Principais causas da insegurança alimentar'
        }
    }
});