import {Text, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';
import styles from './styles';

function FeedPost() {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Kagiso</Text>
        <Entypo
          name="dots-three-horizontal"
          size={25}
          style={styles.threeDots}
        />
      </View>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
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
          <Text style={styles.bold}>400</Text> others
        </Text>
        {/* post desccription */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Kagiso </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque
          omnis dolorem corrupti at ea excepturi libero qui impedit voluptatum
          dolor, quas accusamus porro dicta non quidem, consectetur a illo
          aliquid repellat corporis officia quasi eligendi. Ab totam aspernatur
          quas dolorum quisquam nisi quidem perspiciatis architecto repellat
          eos.
        </Text>
        {/* comments */}
        <Text>View all 16 comment</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>Kagiso </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            itaque
          </Text>
          <AntDesign
            name="hearto"
            size={16}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        {/* posted date */}
        <Text>19 August 2023</Text>
      </View>
    </View>
  );
}

export default FeedPost;
