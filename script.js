const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
    let angle = 0;
    const speed = Math.random() * 0.05 + 0.01; // Kecepatan rotasi acak untuk setiap planet

    function rotate() {
        angle += speed;
        planet.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateX(50%)`;
        requestAnimationFrame(rotate);
    }

    rotate();
});
