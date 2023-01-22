import HomeScreen from './src/screens/HomeScreen';
import {StyleSheet, View} from 'react-native';
import CommentsScreen from './src/screens/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/index';
import EditProfileScreen from './src/screens/EditProfileScreen/index';

const App = () => {
  return (
    <View style={styles.app}>
      <EditProfileScreen />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
