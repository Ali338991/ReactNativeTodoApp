import React from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {MyBtn, MyInput} from './Com';

import SplashImg from '../assets/image/building.png';
import logo from '../assets/image/logo-white.png';

export default function InfoScreen({navigation}) {
  const Password = useSelector(state => state.AuthReducer.user.Password);
  const Email = useSelector(state => state.AuthReducer.user.Email);
  //    const Password = useSelector(state => state.AuthReducer.user.Password)

  // const { Email } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',

      justifyContent: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      // alignItems: 'center',
    },
    Logo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    CenterArea: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    BtnBottom: {
      flex: 1,

      justifyContent: 'flex-end',
    },
    CenterText: {
      color: 'white',
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground source={SplashImg} style={styles.image}>
        <View style={styles.Logo}>
          <Image source={logo} />
        </View>
        <View style={styles.CenterArea}>
          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
            {' '}
            CROWDFUNDING INMOBILIARIO
          </Text>
          <Text style={styles.CenterText}>Email:{Email}</Text>
          <Text style={styles.CenterText}>Password:{Password}</Text>
        </View>
        <View style={styles.BtnBottom}>
          <MyBtn title="Go to Tab Navigation" backgroundColor="#227BFF" onPress={() => navigation.navigate("TabNavigation")}/>
          <MyBtn title="Move to White Login" backgroundColor="#0C1327" onPress={() => navigation.navigate("LoginWhite")} />
        </View>
      </ImageBackground>
    </View>
  );
}
