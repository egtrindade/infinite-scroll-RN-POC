import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import ShowsList from './ShowsList';
import colors from '../styles/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Top TV Shows" />
      <ShowsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

export default Home;
