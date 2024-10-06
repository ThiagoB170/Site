const matrixElement = document.getElementById('matrix');
const originalText = 'Matrix';
const glitchTexts = ['M4tr1x', 'M@tr!x', 'Matr!x', 'MatriX', 'Matr!X', 'Matr!x'];
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFBD33', '#33FFF7']; // Cores para as letras

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function glitch() {
    let glitchText = '';

    for (let i = 0; i < originalText.length; i++) {
        if (Math.random() > 0.5) {
            glitchText += glitchTexts[Math.floor(Math.random() * glitchTexts.length)][i % originalText.length];
        } else {
            glitchText += originalText[i];
        }
    }

    matrixElement.innerHTML = glitchText.split('').map(letter => `<span style="color: ${getRandomColor()};">${letter}</span>`).join('');
}

setInterval(glitch, 200); // Troca a palavra a cada 200ms
