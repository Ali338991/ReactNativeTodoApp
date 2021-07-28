import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {doLogin} from '../store/actions/AuthActions';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {MyBtn, MyInput} from './Com';
import Loading from './Loading';

//Main Component
export default function LoginScreen({navigation}) {
  const userState = useSelector(state => state.AuthReducer.isUserLoggedIn);
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const Login = () => {
    setLoading(true);
    dispatch(doLogin(Email, Password));
    if (userState) {
      setLoading(false);

      navigation.replace('Todo');
    }
  };

  if (loading) {
    return <Loading />;
  }

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

      justifyContent: 'center',
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
        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
          Tassker Login
        </Text>
      </View>

      {/* Input area */}

      <View style={styles.inputArea}>
        <Text style={{color: 'white', alignSelf: 'flex-end', marginRight: 20}}>
          Don't have an account
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text
              style={{color: 'orange', position: 'relative', left: 5, top: 3}}>
              Signup
            </Text>
          </TouchableOpacity>
        </Text>

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

        <Text style={styles.Text}>Forget Password </Text>
      </View>

      {/* Bottom Btn Area */}

      <View style={styles.bottomBtnArea}>
        <MyBtn title="Login" backgroundColor="#FF3366" onPress={Login} />
      </View>
    </View>
  );
}

