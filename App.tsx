import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

function App() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          color: colors.lightgrey,
          fontSize: fonts.size.xl,
        }}>
        Hello Instagram.
        <AntDesign name="stepforward" size={25} color={colors.primary} />
      </Text>
    </View>
  );
}

export default App;
