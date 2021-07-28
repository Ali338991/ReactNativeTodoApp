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
  Dimensions,
  Item,
  Label,
} from 'react-native';
import {MyBtn, MyInput} from './Com';

import SplashImg from '../assets/image/building.png';
import logo from '../assets/image/logo-white.png';

export default function LoginWhite({navigation}) {
  const Password = useSelector(state => state.AuthReducer.user.Password);
  const Email = useSelector(state => state.AuthReducer.user.Email);
  //    const Password = useSelector(state => state.AuthReducer.user.Password)

  // const { Email } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',

      backgroundColor: 'green',
    },
    image: {
      flex: 1,

      alignItems: 'center',
      height: Dimensions.get('window').height / 2.5,
    },
    Logo: {
      flex: 1,
      alignItems: 'center',
      position: 'absolute',
      top: '20%',
    },
    bottomContainer: {
      flex: 2,
      backgroundColor: 'white',
      borderTopStartRadius: 60,
      borderTopEndRadius: 60,
      marginTop: -40,
    },
    Text: {
      alignSelf: 'flex-end',
      marginRight: 12,
      marginTop: 5,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground source={SplashImg} style={styles.image}>
        <View style={styles.Logo}>
          <Image source={logo} />
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={{padding: 20}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>
            Abrir Cuenta
          </Text>

          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17, marginLeft: 12}}>
              Email
            </Text>

            <MyInput
              placeholder="User Email"
              keyboardType="email-address"
              placeholderTextColor="black"
              color="black"
            />

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                marginTop: 8,
                marginLeft: 12,
              }}>
              Password
            </Text>
            <MyInput
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={true}
            />

            <Text style={styles.Text}>Forget Password </Text>
          </View>
        </View>
      </View>
      <View style={{flex:1,justifyContent:"flex-end", backgroundColor:"white"}}>
        <MyBtn title="Login" backgroundColor="#227BFF"/>


      </View>
    </View>
  );
}
