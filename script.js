// script.js
const fireworksContainer = document.querySelector('.fireworks');
const finalMessage = document.getElementById('finalMessage');

// Crear una explosión de fuego artificial
function createFirework() {
    const firework = document.createElement('div');
    const size = Math.random() * 60 + 40; // Tamaño aleatorio
    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;
    firework.style.top = `${Math.random() * window.innerHeight * 0.7}px`; // Posición aleatoria en Y
    firework.style.left = `${Math.random() * window.innerWidth * 0.9}px`; // Posición aleatoria en X
    firework.classList.add('firework');
    fireworksContainer.appendChild(firework);

    // Después de 1.8 segundos, eliminar el fuego artificial
    setTimeout(() => {
        firework.remove();
    }, 1800);
}

// Crear múltiples fuegos artificiales
function startFireworks() {
    let count = 0;
    const interval = setInterval(() => {
        createFirework();
        count++;

        if (count >= 8) {  // Mostrar el mensaje después de 8 fuegos artificiales
            clearInterval(interval);
            setTimeout(() => {
                finalMessage.style.display = 'block';
            }, 500); // Mostrar "Te Amo" después de medio segundo
        }
    }, 500);  // Intervalo entre cada fuego artificial
}

// Iniciar los fuegos artificiales al cargar la página
window.onload = () => {
    startFireworks();
};
