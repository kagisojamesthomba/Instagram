import HomeScreen from './src/screens/HomeScreen';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
