document.getElementById('calcular').addEventListener('click', function () {
    const energiaA = parseInt(document.getElementById('energiaA').value) || 0;
    const energiaB = parseInt(document.getElementById('energiaB').value) || 0;

    const itensA = document.getElementById('itensA').value.split(',').map(Number).filter(n => !isNaN(n));
    const itensB = document.getElementById('itensB').value.split(',').map(Number).filter(n => !isNaN(n));

    const totalA = energiaA + itensA.reduce((acc, val) => acc + val, 0);
    const totalB = energiaB + itensB.reduce((acc, val) => acc + val, 0);

    let vencedor = '';
    if (totalA > totalB) {
        vencedor = 'Dragão A é o vencedor! 🐉';
    } else if (totalB > totalA) {
        vencedor = 'Dragão B é o vencedor! 🐲';
    } else {
        vencedor = 'Empate! ⚔️';
    }

    document.getElementById('resultado').innerHTML = `<h2>${vencedor}</h2>`;
});
