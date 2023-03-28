export function makeCardMarkup(array) {
  return array
    .map(
      ({
        name: { common: countryName },
        flags: { svg, alt },
        capital,
        population,
        languages,
      }) => {
        return `
    <div class="title-cnt">
        <img class="flag" src="${svg}" alt="${alt}"> 
        <h3 class="country-card-title">${countryName}</h3>
        </div>
        
      <ul class="country-details">
        <li class="country-details-item">
          <span class="bold">Capital:</span> ${capital.join()}
        </li>
        
        <li class="country-details-item">
          <span class="bold">Population:</span> ${population}
        </li>

        <li class="country-details-item">
          <span class="bold">Languages:</span> ${Object.values(languages).join(
            ', '
          )}
        </li>
      </ul>
        `;
      }
    )
    .join('');
}

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
