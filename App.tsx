import {StyleSheet, View, Text, ScrollView} from 'react-native';

import FeedPost from './src/components/FeedPost';

const post = {
  id: '1',
  createdAt: '19 December 2022',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea. ',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    userName: 'Kaygee69',
  },
  numberOfComments: 123,
  numberOfLikes: 1234,
  comments: [
    {
      id: '1',
      comment: 'Nice shot! 🎯 ',
      user: {
        userName: 'Tumo',
      },
    },
    {
      id: '2',
      comment: 'Nice shot! 🎯, hahaha very funny man. ',
      user: {
        userName: 'Thabo',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
