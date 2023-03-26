import Notiflix from 'notiflix';

export function displayInfoMsg() {
  const msg = 'Too many matches found. Please enter a more specific name.';
  Notiflix.Notify.info(msg);
}

export function displayErrorMsg() {
  const msg = 'Oops, there is no country with that name';
  Notiflix.Notify.failure(msg);
}
