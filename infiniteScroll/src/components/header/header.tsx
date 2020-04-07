import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.styles';

interface Props {
  title: string;
}

const Header = (props: Props) => {
  const {title} = props;

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
