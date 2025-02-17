let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
  numberOfFilms = prompt('Введите корректное количество просмотренных фильмов:', '');
}

const personalMovieDB = {
  count: +numberOfFilms, 
  movies: {} 
};

for (let i = 0; i < numberOfFilms; i++) {
  let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
  while (lastFilm === '' || lastFilm === null || lastFilm.length > 50)
  {
    alert('Некорректный ввод! Название фильма не должно быть пустым и длиннее 50 символов.');
    lastFilm = prompt('Один из последних просмотренных фильмов?', '');
  }

  let filmRating = prompt('На сколько оцените его?', '');

  while (filmRating === '' || filmRating === null || isNaN(filmRating)) {
    alert('Некорректный ввод! Оценка введена некорректно.');
    filmRating = prompt('На сколько оцените его?', '');
  }

  personalMovieDB.movies[lastFilm] = filmRating;
}

console.log(personalMovieDB);

function showMoviesTable(moviesObject) {
  const tableContainer = document.getElementById('movieTable');

  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const thFilm = document.createElement('th');
  const thRating = document.createElement('th');

  thFilm.textContent = 'Фильм';
  thRating.textContent = 'Оценка';

  headerRow.append(thFilm, thRating);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  for (const [film, rating] of Object.entries(moviesObject)) {
    const row = document.createElement('tr');
    const tdFilm = document.createElement('td');
    const tdRating = document.createElement('td');

    tdFilm.textContent = film;
    tdRating.textContent = rating;

    row.append(tdFilm, tdRating);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

showMoviesTable(personalMovieDB.movies);