'use strict';

// https://restcountries.com/v3.1/name/{name}

const displayCountry = function (data) {
  const markup = `
  <div class="container_figure">
    <div class="figure_image">
      <img src="${data.flags.png}" alt="" class="figure_image">
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
            <p class="tag">👨‍👨‍👦‍👦 Population:</p>
            <p class="info">${data.population}</p>
          </li>
          <li>
            <p class="tag">🗣 Language:</p>
            <p class="info">${data.languages[0].name}</p>
          </li>
          <li>
            <p class="tag">💵 Currency:</p>
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
  document.querySelector('.container').insertAdjacentHTML('afterbegin', markup);
};

const fetchCountry = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const [country] = data;
      console.log(country);
      displayCountry(data[0]);
    });
};

fetchCountry('egypt');
fetchCountry('iran');
fetchCountry('india');
fetchCountry('canada');
fetchCountry('nigeria');