import {FlatList} from 'react-native';
import posts from '../../assets/data/posts.json';
import React from 'react';
import FeedPost from '../../components/FeedPost';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      // key={}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
