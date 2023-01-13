import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from './../../theme/colors';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberText: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
  },
  numberContainer: {
    alignItems: 'center',
  },
  text: {
    color: colors.grey,
  },
  name: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.semi,
    marginBottom: 5,
  },
  bio: {
    color: colors.grey,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
});

export default styles;
