import React from 'react';
import { Toolbar } from 'react-md';
import { MovieList } from './components/MovieList';
import { SearchForm } from './components/SearchForm';

const movies = [
  {
    'Title': 'The Avengers',
    'Year': '2012',
    'imdbID': 'tt0848228',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
  },
  {
    'Title': 'Avengers: Infinity War',
    'Year': '2018',
    'imdbID': 'tt4154756',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
  },
  {
    'Title': 'Avengers: Age of Ultron',
    'Year': '2015',
    'imdbID': 'tt2395427',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
  },
  {
    'Title': 'Avengers: Endgame',
    'Year': '2019',
    'imdbID': 'tt4154796',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'
  },
  {
    'Title': 'The Avengers',
    'Year': '1998',
    'imdbID': 'tt0118661',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
  },
  {
    'Title': 'The Avengers: Earth',
    'Year': '2010–2012',
    'imdbID': 'tt1626038',
    'Type': 'series',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'
  },
  {
    'Title': 'Ultimate Avengers',
    'Year': '2006',
    'imdbID': 'tt0491703',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg'
  },
  {
    'Title': 'Ultimate Avengers II',
    'Year': '2006',
    'imdbID': 'tt0803093',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
  },
  {
    'Title': 'Avengers Assemble',
    'Year': '2013–',
    'imdbID': 'tt2455546',
    'Type': 'series',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg'
  },
  {
    'Title': 'The Avengers',
    'Year': '1961–1969',
    'imdbID': 'tt0054518',
    'Type': 'series',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg'
  }
];

const App = () => {
  return <>
    <Toolbar colored title='Movie Finder' actions={<SearchForm search={(params) => { console.log(params); }} />} />
    <div id="content">
      <MovieList movies={movies} />
    </div>
  </>;
};

export default App;
