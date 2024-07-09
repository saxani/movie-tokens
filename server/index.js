const express = require('express');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const port = process.env.PORT || 4000;
const app = new express();
const TMDB_AUTH = process.env.TMDB_AUTH;

let filmResults;
let posterURL;

const nowPlayingPath = './now_playing/nowplaying.json';

async function getPage(page, region) {
  let data;

  const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&region=${region}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_AUTH,
    },
  };

  await fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      data = json;
    })
    .catch((err) => console.error('error:' + err));

  return data;
}

async function getNowPlaying() {
  let currentPage = 1;
  let region = 'US';

  let data = await getPage(1, region);

  let pages = data['total_pages'];
  filmResults = data.results;

  if (pages > 1) {
    currentPage++;
    while (currentPage <= pages) {
      const testData = await getPage(currentPage, region);
      currentPage++;
      testData.results.forEach((item) => {
        if (!filmResults.find((film) => film.id === item.id)) {
          filmResults.push(item);
        }
      });
    }
  }

  console.log('Data pull finished');
  console.log(`Current list is ${filmResults.length} items long`);

  const json = JSON.stringify(filmResults);

  fs.appendFile(nowPlayingPath, json, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('file created successfully');
    }
  });
}

async function getMovieDetails(id) {
  let movieDetails;
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_AUTH,
    },
  };

  await fetch(url, options)
    .then((res) => res.json())
    .then((json) => (movieDetails = json))
    .catch((err) => console.error('error:' + err));

  return movieDetails;
}

async function getDbConfig() {
  const url = 'https://api.themoviedb.org/3/configuration';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_AUTH,
    },
  };

  await fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      const data = json.images;
      posterURL = data.secure_base_url + data.backdrop_sizes[0];
    })
    .catch((err) => console.error('error:' + err));
}

if (fs.existsSync(nowPlayingPath)) {
  console.log(`The file or directory at '${nowPlayingPath}' exists.`);
  fs.readFile(nowPlayingPath, (err, data) => {
    filmResults = JSON.parse(data);
    console.log('Film Results has ' + filmResults.length + ' entries.');
  });
} else {
  console.log(`The file or directory at '${nowPlayingPath}' does not exist.`);
  getNowPlaying();
}

getDbConfig();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello from the server' });
});

app.get('/now-playing', (req, res) => {
  res.send(filmResults);
});

app.get('/poster-url', (req, res) => {
  res.send({ poster: posterURL });
});

app.post('/movie-details', async (req, res) => {
  const movieDetails = await getMovieDetails(req.body.id);
  res.send(movieDetails);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});