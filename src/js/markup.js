// capital: ['Bern']
// flags:
// {png: 'https://flagcdn.com/w320/ch.png', svg: 'https://flagcdn.com/ch.svg', alt: 'The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field.'}
// languages:
// {fra: 'French', gsw: 'Swiss German', ita: 'Italian', roh: 'Romansh'}
// name:
// {common: 'Switzerland', official: 'Swiss Confederation', nativeName: {…}}
// population: 8654622

export function makeListMarkup(array) {
  //
  const sortedArray = sortAlphabetically(array);

  return sortedArray
    .map(({ name: { common: countryName }, flags: { svg, alt } }) => {
      return `
      <li class="list-item">
        <img class="flag" src="${svg}" alt="${alt}"> 
        <p class="name">${countryName}</p> 
      </li>
        `;
    })
    .join('');
}

function sortAlphabetically(array) {
  return [...array].sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export function makeCardMarkup(array) {
  const { capital, languages, population } = array;
}
