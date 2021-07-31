import React from 'react';
import {View, Text} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { filterTodo } from '../../../store/actions/TodoAction';
import {useSelector, useDispatch} from 'react-redux';


export default function Calender() {
  const uid = useSelector(state => state.AuthReducer.user?.uid)
  var today = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
  const dispatch = useDispatch()
  const filterData = (date,uid) => {
    console.log('check Filter', date);
    dispatch(filterTodo(date,uid));
  };

  return (
    <View>
      <CalendarStrip
        scrollable
        style={{height: 100, paddingTop: 16, paddingBottom: 10}}
        calendarColor={'white'}
        calendarHeaderStyle={{color: 'black'}}
        dateNumberStyle={{color: 'black'}}
        dateNameStyle={{color: 'grey'}}
        iconContainer={{flex: 0.1}}
        highlightDateNameStyle={{color: 'white'}}
        highlightDateNumberStyle={{color: 'white'}}
        highlightDateContainerStyle={{backgroundColor: 'black'}}
        onDateSelected={date => {
          filterData(date.toJSON().slice(0, 10).replace(/-/g, '-'), uid);
        }}
        selectedDate={today}
      />
    </View>
  );
}
