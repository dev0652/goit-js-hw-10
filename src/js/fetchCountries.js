import { displayErrorMsg } from './notifications.js';

export default function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  // return fetch(url).then(r => r.json());

  return fetch(url).then(response => {
    if (!response.ok) {
      // throw new Error(response.status);
      displayErrorMsg();
    }
    return response.json();
  });
}
