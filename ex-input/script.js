function verificarCofrinho() {
      let valorProduto = parseFloat(document.getElementById("valorProduto").value) || 0;
      let moeda1 = parseInt(document.getElementById("moeda1").value) || 0;
      let moeda50 = parseInt(document.getElementById("moeda50").value) || 0;
      let moeda25 = parseInt(document.getElementById("moeda25").value) || 0;
      let moeda10 = parseInt(document.getElementById("moeda10").value) || 0;
      let moeda5 = parseInt(document.getElementById("moeda5").value) || 0;

      let total = (moeda1 * 1.00) +
                  (moeda50 * 0.50) +
                  (moeda25 * 0.25) +
                  (moeda10 * 0.10) +
                  (moeda5 * 0.05);

      let resultado = document.getElementById("resultado");

      resultado.innerHTML = "Total no cofrinho: R$ " + total.toFixed(2) + "." + "<br>";

      if (total >= valorProduto) {
        resultado.innerHTML += "Você tem dinheiro suficiente para comprar o produto!";
      } else {
        let falta = valorProduto - total;
        resultado.innerHTML += "Você não tem dinheiro suficiente. Faltam R$ " + falta + "!";
      }
    }