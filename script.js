// BOTÓN DE WHATSAPP
const btnWp = document.getElementById("btnWp");

if (btnWp) {
    btnWp.addEventListener("click", () => {
        const url =
            "https://wa.me/3122114428?text=Hola%20Felipe,%20vengo%20de%20tu%20página%20web%20y%20quiero%20tus%20servicios.";

        window.open(url, "_blank");
    });
}

// BOTÓN "MIS SERVICIOS"
const btnPortfolio = document.querySelector(".portfolio");

if (btnPortfolio) {
    btnPortfolio.addEventListener("click", () => {
        const section = document.getElementById("servicios");

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// CIERRE AUTOMÁTICO DEL MENÚ EN MÓVIL
const mobileCheck = document.getElementById("check");
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mobileCheck && mobileCheck.checked) {
            mobileCheck.checked = false; // Cierra el menú
        }
    });
});
