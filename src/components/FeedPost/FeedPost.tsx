import {Text, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

function FeedPost({post}: IFeedPost) {
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
            style={styles.icon}
            color={colors.black}
          />
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
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username} </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque
          omnis dolorem corrupti at ea excepturi libero qui impedit voluptatum
          dolor, quas accusamus porro dicta non quidem, consectetur a illo
          aliquid repellat corporis officia quasi eligendi. Ab totam aspernatur
          quas dolorum quisquam nisi quidem perspiciatis architecto repellat
          eos.
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
