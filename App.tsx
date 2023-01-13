import HomeScreen from './src/screens/HomeScreen';
import {StyleSheet, View} from 'react-native';
import CommentsScreen from './src/screens/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/index';

const App = () => {
  return (
    <View style={styles.app}>
      <ProfileScreen />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
