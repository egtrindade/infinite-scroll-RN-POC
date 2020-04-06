import React from 'react';
import {View} from 'react-native';
import Header from '../header/header';
import ShowsList from '../showsList/showsList';
import styles from './home.styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Top TV Shows" />
      <ShowsList />
    </View>
  );
};

export default Home;
