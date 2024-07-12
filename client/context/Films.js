import { createContext, useState } from 'react';

const FilmsContext = createContext(1);

const Provider = ({ children }) => {
  const [films, setFilms] = useState('');
  const [posterURL, setPosterURL] = useState('');

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

  const value = {
    films,
    posterURL,
    getNowPlayingFilms,
  };

  return (
    <FilmsContext.Provider value={value}>{children}</FilmsContext.Provider>
  );
};

export { FilmsContext, Provider };
