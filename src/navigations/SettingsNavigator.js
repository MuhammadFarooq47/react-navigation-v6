import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import { Settings, SettingsDetail, Home } from '../screens';

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
};
export default SettingsNavigator;
