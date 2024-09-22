document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});

const mobileMenu = document.getElementById("mobile-menu");
const navbarItems = document.querySelector(".navbar-items");

mobileMenu.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});
