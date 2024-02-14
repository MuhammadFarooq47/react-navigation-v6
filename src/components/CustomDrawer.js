import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { COLORS, IMGS } from '../constants';

const { width } = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground style={styles.userBG} source={IMGS.bgPattern}>
        <Image style={styles.userImage} source={IMGS.user} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  userBG: {
    height: 140,
    marginTop: -5,
  },
  userImage: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    right: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 110 / 2 + 10,
  },
});
