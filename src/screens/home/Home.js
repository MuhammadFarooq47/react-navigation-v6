import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import Icon from "react-native-vector-icons/Ionicons";
// import Navigation from "react-navig"

const Home = ({navigation}) => {
  return (
    <>
    <StatusBar  animated={true}
        backgroundColor= {COLORS.bgColor}
        />
    <View style={{ backgroundColor: COLORS.bgColor,}}>
    <Icon name="menu"  size={30} onPress={() => navigation.openDrawer()} 
    style={{
     margin: 10,
    }}
    />
    </View>
  
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Home!</Text>
    </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
