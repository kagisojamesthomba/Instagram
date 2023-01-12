import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import colors from './../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = React.useState<string>('');

  const onPost = () => {
    console.warn(`Posting: ${newComment}`);
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        onChangeText={setNewComment}
        value={newComment}
        placeholder="Write your comment"
        style={styles.input}
        multiline
      />
      <Text style={styles.button} onPress={onPost}>
        Post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  root: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginLeft: 6,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
  },
});

export default Input;
