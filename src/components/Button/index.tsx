import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import colors from './../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
  onPress?: () => void;
  text?: string;
}

const Button = ({text = '', onPress = () => {}}: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    width: 150,
  },
  text: {
    color: colors.grey,
    fontWeight: fonts.weight.semi,
  },
});
