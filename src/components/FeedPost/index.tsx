import {Image, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';
import {styles} from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
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
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="hearto"
            size={24}
            color={colors.black}
            style={styles.icon}
          />
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
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.userName}</Text>{' '}
          {post.description}
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
