import React from 'react';
import {View} from 'react-native';
import Header from '../../components/header/header';
import ShowsList from '../../components/showsList/showsList';
import styles from './home.styles';

const Home = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Header title="Top TV Shows" />
      <ShowsList />
    </View>
  );
};

export default Home;
