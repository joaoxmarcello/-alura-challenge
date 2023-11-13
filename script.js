function converterMoedas() {
  // Obtém o valor em reais digitado pelo usuário
  const valorEmReais = parseFloat(document.getElementById('valorEmReais').value);

  if (isNaN(valorEmReais)) {
    alert('Por favor, insira um valor válido em Reais.');
    return;
  }

  // Exemplo de solicitação para obter a cotação do dólar, euro e bitcoin
  const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Calcula os valores convertidos
      const valorEmDolar = valorEmReais / data.USDBRL.bid;
      const valorEmEuro = valorEmReais / data.EURBRL.bid;
      const valorEmBitcoin = valorEmReais / data.BTCBRL.bid;

      // Atualiza os elementos HTML com os valores convertidos
      document.getElementById('dolar').textContent = `$ ${valorEmDolar.toFixed(2)}`;
      document.getElementById('euro').textContent = `€ ${valorEmEuro.toFixed(2)}`;
      document.getElementById('bitcoin').textContent = `₿ ${valorEmBitcoin.toFixed(8)}`;
    })
    .catch(error => {
      console.error('Erro na solicitação:', error.message);
    });
}

function converterDistancia() {
  const distanciaAnosLuz = parseFloat(document.getElementById('distanciaAnosLuz').value);

  if (isNaN(distanciaAnosLuz)) {
    alert('Por favor, insira uma distância válida em anos-luz.');
    return;
  }

  // Constante para a conversão de anos-luz para metros
  const anosLuzParaMetros = 9.461e15;

  // Calcula a distância em metros
  const distanciaMetros = distanciaAnosLuz * anosLuzParaMetros;

  // Formata o resultado para notação científica
  const distanciaMetrosFormatada = distanciaMetros.toExponential();

  // Atualiza o elemento HTML com a distância em metros
  document.getElementById('distanciaMetros').textContent = `${distanciaMetrosFormatada} metros`;
}
