import axios, { AxiosResponse } from 'axios';
import { IShow } from '../interfaces/show';

const url = `https://www.episodate.com/api/`;

//: Promise<IShow[]>
export const getMostPopularShows = (page: number) =>
  axios
    .get(`${url}most-popular?page=${page}`)
    .then((response) => response.data.tv_shows)
    .catch((error) => error);
