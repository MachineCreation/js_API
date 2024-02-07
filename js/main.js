const apiKey = '9834327a-fac9-446d-817a-b7bad05c747a';

async function fetchPrices() {
  const cryptocurrencies = ['BTC', 'LTC', 'ETC', 'XTZ'];
  const apiUrl = 'http://localhost:3000/api/cryptocurrency/quotes/latest?symbol=' + cryptocurrencies.join(',') + '&convert=USD';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    for (const symbol of cryptocurrencies) {
      const price = data.data[symbol.toUpperCase()].quote.USD.price.toFixed(2);
      document.getElementById(`${symbol}-price`).textContent = `$${price}`;
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchPrices(); // Fetch prices when the page loads

//setInterval(fetchPrices, 5000); // Fetch prices every 5 seconds only use for short time for POC