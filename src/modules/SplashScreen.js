import React, {useState,useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import {doCheckUser} from '../store/actions/AuthActions';
import {useDispatch} from 'react-redux';
import Loading from './Loading';

export default function SplashScreen({navigation}) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout( () => {
      setLoading(true)
 
    Check()
    }, 2000);
    
  }, [])
  async function Check() {
    await auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Check User in App.js', user);
        dispatch(doCheckUser(user));
        setLoading(false);
        navigation.replace('Todo');
      } 
      else {
        setLoading(false)
        navigation.replace('LoginScreen');
        console.log('Check User in App.js in else');
      }
    });
    
  }

 


  if (loading) {
    return (
     <Loading/>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar hidden />

       <Text style={{fontSize: 60, fontWeight: 'bold', color: 'white'}}>
        Tassker{' '}
      </Text>
    </View>
  );
}
