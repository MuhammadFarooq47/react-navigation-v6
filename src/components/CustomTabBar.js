import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
const CustomTabBar = props => {
  return (
    <View>
      <BottomTabBar {...props} />
    </View>
  );
};
export default CustomTabBar;
