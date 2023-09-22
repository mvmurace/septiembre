let clickCount = 0;

document.body.addEventListener("click", function(event) {
    clickCount++;

    if (clickCount <= 21) {
        const flower = document.createElement("div");
        flower.className = "flower";
        
        const petalCount = 8; // Cantidad de pétalos
        const petalAngle = 360 / petalCount;
        
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement("div");
            petal.className = "petal";
            petal.style.transform = `rotate(${i * petalAngle}deg)`;
            flower.appendChild(petal);
        }
        
        flower.style.left = `${event.clientX - 50}px`;
        flower.style.top = `${event.clientY - 50}px`;
        
        document.body.appendChild(flower);
    }

    if (clickCount === 21) {
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "De parte de Vinicio, para ti";
        mensaje.style.display = "block";
    }
});
