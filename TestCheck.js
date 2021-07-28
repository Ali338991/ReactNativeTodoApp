import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const TestCheck = () => {
   const name = useSelector(state => state.AuthReducer.name)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
      }}>
      <Text>{name}</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      <Text>Hello, world!</Text>
      
    </View>
  )
}
export default TestCheck;