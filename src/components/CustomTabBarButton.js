import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../constants';
const CustomTabBarButton = props => {
  const { children, accessibilityState, onPress, route } = props;

  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View style={styles.svgContainer}>
          <View style={styles.svgGapFiller} />
          <View style={{ marginLeft: -1, marginRight: -1 }}>
            <Svg width={72} height={58} viewBox="0 0 75 61">
              <Path
                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill={COLORS.white}
              />
            </Svg>
          </View>
          <View style={styles.svgGapFiller} />
        </View>

        <Pressable onPress={onPress} style={styles.activeStyle}>
          {children}
        </Pressable>
      </View>
    );
  } else {
    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.inactiveStyle,
          {
            marginRight: route === 'settings' ? 0 : -2,
          },
        ]}>
        {children}
      </Pressable>
    );
  }
};
export default CustomTabBarButton;

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  activeStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    top: -22,
    backgroundColor: COLORS.white,
  },
  inactiveStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  svgContainer: {
    flexDirection: 'row',
    gap: 0,
  },
  svgGapFiller: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
