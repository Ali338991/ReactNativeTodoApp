import {
  ADD_TODO,
  CHECKED_TODO,
  DELETE_TODO,
  LOAD_TODO,
  UPDATE_TODO,
} from '../reducers/TodoType';
import {db} from '../../config/Firebase';

export const loadTodo =  (Date,uid) => async dispatch =>{
  try {
    console.log('try');

     await db
      .collection('sample')
      .where('date', '==', Date)
      .where('uid', '==', uid)
      .onSnapshot((querySnapshot)=> {
        const todoData = [];       
        querySnapshot.forEach(doc => {
          todoData.push({
            ...doc.data(),
            id: doc.id,   
          }); 
      })   

      console.log('CheckFinal', todoData)
      dispatch({
        type: LOAD_TODO,
        payload: todoData,
      });

    })

       
      
  } 
  catch (error) {
    alert(error);
    console.log('error', error);
  }
};
//Filter Data


export const addTodo = (Task,today,uid) => async dispatch => {
  console.log('action, data from react component', Task);
  const Add = await db.collection('sample').add({
    name: Task,
    check: false,
    date:today,
    uid:uid,
  });
  // console.log("error", Add);
  dispatch({
    type: ADD_TODO,
    payload: Add,
  });
};

export const updateTodo = (Task,description, FireStoreId) => async dispatch => {
  console.log('Update Action', (Task, FireStoreId));
  const update = await db
    .collection('sample')
    .doc(FireStoreId)
    .update({
      name: Task,
      description:description,
    });
  dispatch({
    type: UPDATE_TODO,
    payload: update,
  });
};

export const deleteTodo = id => async dispatch => {
  console.log('Delete Action', id);
  const del = await db.collection('sample').doc(id).delete();
  dispatch({
    type: DELETE_TODO,
    payload: del,
  });
};

export const checkedTodo = (id,boolean) => async dispatch => {
  console.log('Checked Action', ("id checked",id));
  const checked = await db
    .collection('sample')
    .doc(id)
    .update({check: !boolean});
  dispatch({
    type: CHECKED_TODO,
    payload: checked,
  });
};
