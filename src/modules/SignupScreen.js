import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { doSignup } from '../store/actions/AuthActions';

import {View, Text, Button, StatusBar, StyleSheet, Image} from 'react-native';
import {MyBtn, MyInput} from './Com';

//Main Component
export default function SignupScreen({navigation}) {
  const dispatch = useDispatch();

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const SignUp = () => {
   
    dispatch(doSignup(Name,Email,Password));

    // navigation.navigate('LoginScreen');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    imgContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      
    },    
    inputArea: {
      flex: 3,
     
      justifyContent:"center"
     
    },
    Text: {
      color: 'white',
      marginLeft: 20,
      marginTop: 5,
    },

    bottomBtnArea: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });

  return (
    <View style={styles.container}>
      
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* Image container start */}

      <View style={styles.imgContainer}>
        {/* <Image
          style={styles.logo}
          source={require('../assets/image/logo-white.png')}
        /> */}
        <Text style={{fontSize:40,fontWeight:"bold",color:"white"}}>Tassker SignUp</Text>
      </View>

      {/* Input area */}

      <View style={styles.inputArea}>
      <MyInput
          placeholder="User Name"
          placeholderTextColor="white"
          color="white"
          borderColor="white"
          onChangeText={val => setName(val)}
        />

        <MyInput
          placeholder="User Email"
          keyboardType="email-address"
          placeholderTextColor="white"
          color="white"
          borderColor="white"
          onChangeText={val => setEmail(val)}
        />

        <MyInput
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          color="white"
          borderColor="white"
          onChangeText={val => setPassword(val)}
        />

        <Text style={styles.Text}>Forget Password</Text>
      </View>

      {/* Bottom Btn Area */}

      <View style={styles.bottomBtnArea}>
        <MyBtn title="SignUp" backgroundColor="#FF3366" onPress={SignUp} />
      </View>
    </View>
  );
}
// () => navigation.navigate("screen2")
