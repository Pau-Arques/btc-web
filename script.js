const dollarContainer = document.getElementById('dollar');
const usdAmount = document.getElementById('usd-amount');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));

const displayData = data => {
    const usd = data.bpi.EUR.rate_float;
    usdAmount.textContent = `$${usd} EUR`;
}
