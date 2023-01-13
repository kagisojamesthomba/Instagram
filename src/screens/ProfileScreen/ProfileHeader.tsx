import {View, Image, Text} from 'react-native';
import styles from './styles';
import Button from './../../components/Button/index';
import user from '../../assets/data/user.json';
const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.text}>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <View style={styles.buttonContainer}>
        <Button
          text="Edit Profile"
          onPress={() => {
            console.warn('edit profile');
          }}
        />
      </View>
    </View>
  );
};
export default ProfileHeader;
