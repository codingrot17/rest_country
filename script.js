'use strict';

const displayCountry = function (data) {
  const markup = `
  <div class="container_figure">
  <div class="figure_image">
    <img class="figure_image" src="${data.flags.png}" alt="" />
  </div>
  <div class="figure_content">
    <h5 class="figure_name">${data.name}</h5>
    <span class="figure_info">
      <ul>
        <li>
          <p class="tag">🌴 Capital:</p>
          <p class="info">${data.capital}</p>
        </li>
        <li>
          <p class="tag">👨‍👩‍👦‍👦 Population:</p>
          <p class="info">${data.population}</p>
        </li>
        <li>
          <p class="tag">🗣 Language:</p>
          <p class="info">${data.languages[0].name}</p>
        </li>
        <li>
          <p class="tag">💰 Currency:</p>
          <p class="info">${data.currencies[0].name}</p>
        </li>
        <li>
          <p class="tag">🌆 Region:</p>
          <p class="info">${data.region}</p>
        </li>
      </ul>
    </span>
  </div>
</div>
`;
  document.querySelector('.box').insertAdjacentHTML('afterbegin', markup);
};

const fetchCountry = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const [country] = data;
      console.log(country);
      displayCountry(country);
    });
};


document.querySelector('#input_country').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const inputCountry = document.querySelector('.country_name').value;
  fetchCountry(inputCountry);
});
