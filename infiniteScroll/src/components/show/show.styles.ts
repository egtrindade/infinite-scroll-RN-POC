import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

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
    color: colors.primary,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 220,
    marginBottom: 8,
  },
});

export default styles;