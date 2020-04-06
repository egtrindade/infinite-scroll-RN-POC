import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import {IShow} from '../interfaces/show';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 180,
    height: 300,
    padding: 8,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 220,
    marginBottom: 8,
  },
});

export default Show;
