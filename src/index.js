import './css/styles.css';
import debounce from 'lodash.debounce';

import fetchCountries from './js/fetchCountries.js';
import getRefs from './js/refs.js';
import { displayInfoMsg } from './js/notifications.js';
import { makeListMarkup, makeCardMarkup } from './js/markup.js';

// Get elements refs
const refs = getRefs();

// Listen to input in the search box
const DEBOUNCE_DELAY = 300;
refs.searchBox.addEventListener('input', debounce(onType, DEBOUNCE_DELAY));

// Callback for addEventListener
function onType(event) {
  //   Clear results on next input
  refs.countryList.innerHTML = '';
  refs.card.innerHTML = '';

  const query = event.target.value;

  // Prevent error by not fetching data if query is empty
  if (query.length === 0) {
    return;
  }

  // Fetch search matches
  fetchCountries(query).then(onResolve).catch(console.log);
}

// Promise resolve handler
function onResolve(array) {
  //
  if (array.length > 10) {
    displayInfoMsg();
    return;
  } else if (array.length > 1 && array.length <= 10) {
    refs.card.innerHTML = '';

    //   update list markup
    const markup = makeListMarkup(array);
    refs.countryList.innerHTML = markup;
    return;
  } else {
    // refs.countryList.innerHTML = '';
    //   create card markup
    const markup = makeCardMarkup(array);
    refs.card.innerHTML = markup;
  }
}
