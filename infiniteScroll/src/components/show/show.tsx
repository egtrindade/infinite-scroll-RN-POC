import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './show.styles';
import { IShow } from '../../interfaces/show';

interface Props {
  show: IShow;
}

const Show = (props: Props) => {
  const {name, image_thumbnail_path} = props.show;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{uri: image_thumbnail_path}}
      />
      <Text style={styles.subtitle}>{name}</Text>
    </View>
  );
};

export default Show;
