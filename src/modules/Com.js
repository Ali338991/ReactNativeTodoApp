import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'



// Input
export function MyInput(props) {
  const { placeholderTextColor, placeholder,borderColor, color, onChangeText, Value, ...rest } = props;

    return (
    <TextInput
      onChangeText={onChangeText}
      style={{
        marginTop: 20,
        height: 50,
        marginHorizontal: 12,
        borderColor,
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 20,
        fontSize: 15,
        color
      }}
      value={Value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      {...rest}

    />
  )
}


//Button

export function MyBtn(props) {




  const { title, backgroundColor, onPress } = props;
  return (

    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor, alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 15,
      }}>

      <Text style={{ color: "white", fontSize: 15 }}>{title}</Text>
    </TouchableOpacity>
  )
}


