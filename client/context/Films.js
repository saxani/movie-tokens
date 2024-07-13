import { createContext, useState } from 'react';

const FilmsContext = createContext(1);

const Provider = ({ children }) => {
  const [films, setFilms] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [selectedFilm, setSelectedFilm] = useState({
    title: '',
    date: '',
    theater: '',
    viewType: '',
    time: '',
  });
  const [toSee, setToSee] = useState('');
  const [seenFilms, setSeenFilms] = useState([]);

  const getNowPlayingFilms = () => {
    fetch('http://192.168.2.131:4000/now-playing')
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch('http://192.168.2.131:4000/poster-url')
      .then((res) => res.json())
      .then((data) => {
        setPosterURL(data.poster);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateSelectedFilm = ({ title, date, theater, viewType, time }) => {
    let updatedValues = {};

    title ? (updatedValues.title = title) : '';
    date ? (updatedValues.date = date) : '';
    theater ? (updatedValues.theater = theater) : '';
    viewType ? (updatedValues.viewType = viewType) : '';
    time ? (updatedValues.time = time) : '';

    setSelectedFilm((selectedFilm) => ({
      ...selectedFilm,
      ...updatedValues,
    }));
  };

  const updateToSee = (film) => {
    setToSee(film);
  };

  const updateSeenFilms = (film) => {
    setSeenFilms((seenFilms) => ({
      ...seenFilms,
      ...film,
    }));
  };

  const value = {
    films,
    posterURL,
    getNowPlayingFilms,
    updateSelectedFilm,
    selectedFilm,
    updateSeenFilms,
    updateToSee,
  };

  return (
    <FilmsContext.Provider value={value}>{children}</FilmsContext.Provider>
  );
};

export { FilmsContext, Provider };
