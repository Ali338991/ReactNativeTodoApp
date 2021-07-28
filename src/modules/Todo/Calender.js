import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './TodoStyle';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import useTodo from './useTodo';


import {Agenda, calendarTheme} from 'react-native-calendars';

export default function Calender({route, navigation}) {
  const {item, otherParam} = route.params;
  const [
    Todo,
    Task,
    Flag,
    description,
    setDescription,
    setTodo,
    setTask,
    setFlag,
    ctaDelete,
    ctaCheck,
    ctaHandler,
    ctaUpdateHandler,
    UpdateItem,
  ] = useTodo();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 40,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
            <Feather name="chevron-left" size={25} />
            Today Task
          </Text>
        </TouchableOpacity>
      </View>
      {/* Back View End */}

      <View style={{paddingVertical: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, marginHorizontal: 10}}>
          {item.name}
        </Text>
      </View>
      {/* Title End */}

      <View style={{flex: 1}}>
        <Text style={{marginHorizontal: 20, marginTop: 30, fontSize: 20}}>
          {item.description}
        </Text>
      </View>

      {/* Description End
      
      */}


      {/* Footer Area */}

      <View
        style={{
          flexDirection: 'row',
          marginBottom:10,

          marginHorizontal: 10,
          height: 50,
        }}>
        <AntDesign
          name="delete"
          size={35}
          style={{flex: 1, alignSelf: 'center'}}
          onPress={() => {ctaDelete(item.id),navigation.goBack()}}
        />
        <AntDesign
          name="sharealt"
          size={35}
          style={{flex: 1, alignSelf: 'center'}}
        />
        <View style={{flex: 1.5, alignSelf: 'center'}}>
          {item.check ? (
            <TouchableOpacity disabled={true}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#a2f2b9',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                  Complete
                </Text>
                <Entypo
                  name="check"
                  size={20}
                  color="white"
                  style={{paddingLeft: 20, alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
            onPress={() => ctaCheck(item.id, item.check)}>
              <View
                style={{
                 marginHorizontal:5,
                  backgroundColor: 'red',
                  padding: 10,
                  borderRadius: 10,
                 
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold',alignSelf:"center", fontSize: 20}}>
                  Complete
                </Text>
               
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
