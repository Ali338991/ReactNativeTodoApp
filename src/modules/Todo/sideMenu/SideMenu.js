import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import style from './SideMenuStyle';
import {useSelector, useDispatch} from 'react-redux';
import {doLogout} from '../../../store/actions/AuthActions';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SideMenu({navigation}, props) {
  const email = useSelector(state => state.AuthReducer.user?.email);

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(doLogout());
    navigation.replace('LoginScreen');
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Text style={{color: 'black', fontSize: 20, marginLeft: 20}}>
          {email}
        </Text>

        <View style={style.lineStyle} />
        <View style={style.logoutContainer}>
          <TouchableOpacity
            style={{display: 'flex', flexDirection: 'row'}}
            onPress={signOut}>
            {/* <Icon name="logout-variant" size={30} color={"#FF6347"} /> */}
            <AntDesign name="logout" size={30} color={'#FF6347'} />
            <Text style={{fontSize: 20, marginLeft: 10}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
