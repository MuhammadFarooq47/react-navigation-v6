import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/icons/LOGO.svg';
import { COLORS, ROUTES } from '../../constants';
import { loginUser } from '../../redux/slices/authSlice';
import { Toast } from 'toastify-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const navigation = useNavigation();
  const dispatch = useDispatch()

  const onChange = (text, field) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [field]: text,
    }));
  };
  

  const onSubmit = () => {
    console.log("Hello")
    // try {
    //   console.log("World")
    //   dispatch(loginUser(credentials));
    // } catch (error) {
    //   console.log("error from login")
    // }
    AsyncStorage.clear()
    if (credentials?.email && credentials?.password !== "") {
      dispatch(loginUser(credentials));
      // navigation.navigate(ROUTES.HOME);
      Toast.success("Login Successfull...")
    }else{
      Toast.error("Email password required!")
    }

  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Logo width={40} height={40} style={styles.mr7} />
            <Text style={styles.brandName}>Colors</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <TextInput  
  placeholder="Email"
  value={credentials?.email}
  onChangeText={(text) => onChange(text, 'email')}
  style={styles.input}  
/>
<TextInput  
  placeholder="Password"  
  value={credentials?.password}
  secureTextEntry
  onChangeText={(text) => onChange(text, 'password')}
  style={styles.input}  
/>



          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 1.0, x: 0.0 }}>
              {/******************** LOGIN BUTTON *********************/}
              <Pressable
                onPress={() => console.log("hello")}
                activeOpacity={0.7}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </Pressable>
            </LinearGradient>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <Pressable
              onPress={onSubmit}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <Pressable
            onPress={() => navigation.navigate(ROUTES.REGISTER)}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
