import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadTodo, filterTodo} from '../../store/actions/TodoAction';
import RoundedCheckbox from 'react-native-rounded-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Agenda} from 'react-native-calendars';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import useTodo from './useTodo';
import styles from './TodoStyle';

import { doLogout } from '../../store/actions/AuthActions';


export default function ToDo({navigation}) {
  var today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const todoData = useSelector(state => state.TodoReducer.todo);
  const todoSize = useSelector(state => state.TodoReducer.size);
  console.log('Check', todoData);

  useEffect(() => {
    dispatch(loadTodo(today));
    // console.log("useEffectCalled")
  }, []);
  

  const filterData = date => {
    console.log('check Filter', date);
    dispatch(filterTodo(date));
  };
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
 
  const signOut = () =>{
   dispatch(doLogout())
    navigation.replace("LoginScreen")


  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* <View style={{flex: 0.5, backgroundColor: 'green'}}>
        <Text>ASD</Text>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginTop: 40,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
            Tassker
          </Text>
        </View>
        <View style={{position: 'absolute', right: 10, flexDirection: 'row'}}>
          <Feather name="bell" size={30} />
          <Icon name="md-menu" size={30} />
        </View>
      </View>
      {/*.............................. Slider Area..................................... */}

      <View style={styles.Slider}>
        <Agenda onDayPress={day => filterData(day.dateString)} />
      </View>

      {/*.............................. Input Area..................................... */}

      {/*.............................. Todo Data Area..................................... */}
      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            marginHorizontal: 10,
          }}>
          {todoSize} Tasks Today
        </Text>

        <ScrollView style={{height: 300}}>
          {todoData?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  marginTop: 10,
                }}>
                <RoundedCheckbox
                  innerSize={25}
                  outerSize={25}
                  isChecked={item.check}
                  component={
                    item.check ? <Entypo name="check" size={20}  /> : <></>
                  }
                  checkedColor="#ff6633"
                  // uncheckedColor=
                  onPress={() => ctaCheck(item.id, item.check)}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Calender', {
                      item: item,
                    })
                  }>
                  <Text
                    style={{
                      color: 'black',
                      width: 200,
                      marginLeft: 8,
                      marginTop: 2,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    position: 'absolute',
                    right: 10,
                    flexDirection: 'row',
                  }}>
                  <Feather
                    name="edit"
                    size={30}
                    onPress={() => {
                      setModalVisible(true);
                      UpdateItem(item, item.id);
                    }}
                  />
                  <Feather
                    name="delete"
                    size={30}
                    onPress={() => ctaDelete(item.id)}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      {/* Add Task Model */}

      {modalVisible ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Entypo
                  name="circle-with-cross"
                  color="#750e12"
                  size={30}
                  style={{position: 'absolute', right: 5, top: 5}}
                  onPress={() => setModalVisible(!modalVisible)}
                />

                <View style={styles.EnterTaskInputContainer}>
                  <TextInput
                    style={styles.EnterTaskInput}
                    placeholder="Enter Task"
                    placeholderTextColor="black"
                    value={Task}
                    onChangeText={val => setTask(val)}
                  />

                  <TextInput
                    style={styles.EnterTaskInput}
                    placeholder="Enter Description"
                    placeholderTextColor="black"
                    value={description}
                    onChangeText={val => setDescription(val)}
                  />
                </View>

                {Flag ? (
                  <TouchableOpacity
                    onPress={ctaUpdateHandler}
                    style={styles.BtnUpdateTask}>
                    <Text style={{color: 'white', fontSize: 15}}>Update</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => ctaHandler(today)}
                    style={styles.BtnAdd}>
                    <Text style={{color: 'white', fontSize: 15}}>Add</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <></>
      )}
      {/* End Add Task Modal */}

      <View style={{justifyContent: 'flex-end', flex: 1}}>
      <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.BtnModel}>
          <Text style={styles.BtnText}>
            <Feather name="plus" size={15} />
            Add a New Task
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={signOut}
          style={styles.BtnModel}>
          <Text style={styles.BtnText}>
            Logout
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
