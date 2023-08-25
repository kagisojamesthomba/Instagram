import {Text, View, Image, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import {useState} from 'react';
import DoublePressable from '../DoublePressable';

interface IFeedPost {
  post: IPost;
}

function FeedPost({post}: IFeedPost) {
  const [isDescriptionExpanded, setIsDecriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };
  const toggleDescriptionExpanded = () => {
    setIsDecriptionExpanded(v => !v);
  };

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={25}
          style={styles.threeDots}
        />
      </View>
      <DoublePressable onDoublePress={toggleLiked}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.red : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>Tumo</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes}</Text> others
        </Text>
        {/* post desccription */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {' '}
          {isDescriptionExpanded ? 'less' : 'see more'}{' '}
        </Text>
        {/* comments */}
        <Text>View all {post.nofComments}comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {/* posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
}

export default FeedPost;
