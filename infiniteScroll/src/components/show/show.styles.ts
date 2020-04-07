import {StyleSheet} from 'react-native';
import Colors from '../../layouts/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 180,
    height: 300,
    padding: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 220,
    marginBottom: 8,
  },
});

export default styles;