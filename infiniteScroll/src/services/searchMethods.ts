import axios from 'axios';

const url = `https://www.episodate.com/api/`;

export const getMostPopularShows = (page: number) =>
  axios
    .get(`${url}most-popular?page=${page}`)
    .then((response) => {
      return {pages: response.data.pages, shows: response.data.tv_shows};
    })
    .catch((error) => error);
