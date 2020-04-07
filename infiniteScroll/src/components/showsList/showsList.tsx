import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {IShow} from '../../interfaces/show';
import {getMostPopularShows} from '../../services/searchMethods';
import Show from '../show/show';
import styles from './showsList.styles';

const ShowsList = () => {
  const [shows, setShows] = useState<IShow[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = () => {
    getMostPopularShows(pageNumber)
      .then((response) => setShows([...shows, ...response]))
      .catch((error) => console.log(error));

    setPageNumber(pageNumber + 1);
  };

  return (
    <FlatList
      data={shows}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={({item}) => <Show key={item.id} show={item} />}
      keyExtractor={(item: IShow) => item.name}
      onEndReached={getShows}
      onEndReachedThreshold={0.4}
    />
  );
};

export default ShowsList;
