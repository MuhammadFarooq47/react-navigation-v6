import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from '../components/CustomTabBar';
import CustomTabBarButton from '../components/CustomTabBarButton';
import { COLORS, ROUTES } from '../constants';
import { Home, Notifications, Wallet } from '../screens';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          switch (route.name) {
            case ROUTES.HOME_TAB:
              iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
              break;
            case ROUTES.SETTINGS_NAVIGATOR:
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            case ROUTES.WALLET:
              iconName = focused ? 'wallet' : 'wallet-outline';
              break;
            case ROUTES.NOTIFICATIONS:
              iconName = focused
                ? 'md-notifications-sharp'
                : 'md-notifications-outline';
              break;
            default:
              iconName = '';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.WALLET}
        component={Wallet}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          headerShown: true,
          title: 'Settings',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ padding: 6 }}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                size={34}
                color={COLORS.dark}
              />
            </Pressable>
          ),
          tabBarButton: props => (
            <CustomTabBarButton route="settings" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    elevation: 0,
    height: 58,
  },
});
