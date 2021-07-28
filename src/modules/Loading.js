import React from 'react'
import { View,ActivityIndicator,StatusBar, Text } from 'react-native'

export default function Loading() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden />

        <ActivityIndicator color="black" size="large" />
      </View>
    )
}
