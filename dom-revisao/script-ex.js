function calcularConsumo() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const combustivel = parseFloat(document.getElementById("combustivel").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(distancia) || isNaN(combustivel) || combustivel <= 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    resultado.style.color = "red";
    return;
  }

  const consumoMedio = distancia / combustivel;

  resultado.textContent = `${consumoMedio.toFixed(3)} km/l`;
  resultado.style.color = "green";
}