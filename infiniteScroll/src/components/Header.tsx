import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';

interface Props {
  title: string;
}

const Header = (props: Props) => (
  <View style={styles.header}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryDark,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 16,
  },
});

export default Header;
