import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
export const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
    marginVertical: 3,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 5,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  footerText: {
    color: colors.grey,
    fontWeight: fonts.weight.thin,
  },
  middleColumn: {
    flex: 1,
  },
});
