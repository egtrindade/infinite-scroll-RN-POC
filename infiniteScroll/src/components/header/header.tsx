import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.styles';

interface Props {
  title: string;
}

const Header = (props: Props) => {
  const {title} = props;
  const {headerStyle, titleStyle} = styles;

  return (
    <View style={headerStyle}>
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
};

export default Header;
