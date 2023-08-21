import {StyleSheet} from 'react-native';
import FeedPost from './src/components/FeedPost';
import {View} from 'react-native';

function App() {
  return (
    <View style={styles.app}>
      <FeedPost />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
