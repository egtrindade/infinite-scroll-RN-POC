import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {IShow} from '../../interfaces/show';
import {getMostPopularShows} from '../../services/searchMethods';
import Show from '../show/show';
import styles from './showsList.styles';

const ShowsList = () => {
  const [shows, setShows] = useState<IShow[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const {container} = styles;

  useEffect(() => {
    getShows();
  }, []);

  const getShows = () => {
    getMostPopularShows(pageNumber)
      .then((response) => {
        setTotalPages(response.pages);
        setShows([...shows, ...response.shows]);
      })
      .catch((error) => console.log(error));

    if (pageNumber < totalPages) setPageNumber(pageNumber + 1);
  };

  return (
    <FlatList
      data={shows}
      contentContainerStyle={container}
      renderItem={({item}) => <Show key={item.id} show={item} />}
      keyExtractor={(item: IShow, index) => index.toString()}
      numColumns={2}
      onEndReached={getShows}
      onEndReachedThreshold={0.4}
    />
  );
};

export default ShowsList;
