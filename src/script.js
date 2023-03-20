import './style.css';

const input = document.getElementById('input-ddd');
const button = document.getElementsByTagName('button')[0];
const p1 = document.getElementsByTagName('p')[0];
const p2 = document.getElementsByTagName('p')[1];

const apiURL = 'https://brasilapi.com.br/api/ddd/v1/';

const resultDDD = async () => {
  if (input.value.length === 2) {
    const response = await fetch(`${apiURL}${input.value}`);
    const data = await response.json();
    // console.log(data);
    p1.innerHTML = `O Estado é ${data.state}`;
    const listaCidades = data.cities.map((city) => city[0] + city.slice(1).toLowerCase());

    p2.innerHTML = `As cidades são: ${listaCidades.reverse().join(', ')}`;
  }
};

button.addEventListener('click', resultDDD);
