import {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';
import {styles} from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePress';
import Carousel from '../Carousel';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(existingValue => !existingValue);
  };

  const toggleLike = () => {
    setIsLiked(existingValue => !existingValue);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  }

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.userName}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {content}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              color={isLiked ? colors.accent : colors.black}
              style={styles.icon}
            />
          </Pressable>

          <Ionicons
            name="chatbubble-outline"
            color={colors.black}
            size={24}
            style={styles.icon}
          />
          <Feather
            size={24}
            color={colors.black}
            name="bookmark"
            style={styles.icon}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>Tumo </Text>and{' '}
          <Text style={styles.bold}>{post.numberOfLikes} others</Text>
        </Text>
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{post.user.userName}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>
        <Text style={styles.viewAll}>
          View all {post.numberOfComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Text style={styles.date}>{post.createdAt}</Text>
      </View>
    </View>
  );
};
export default FeedPost;
