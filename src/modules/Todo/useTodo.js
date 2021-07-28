import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  updateTodo,
  deleteTodo,
  checkedTodo,
} from '../../store/actions/TodoAction';

export default function useTodo() {
  const dispatch = useDispatch();
  const todoData = useSelector(state => state.TodoReducer.todo);
  console.log('Check', todoData);

  const [Todo, setTodo] = useState();
  const [Task, setTask] = useState();
  const [description, setDescription] = useState();
  const [Flag, setFlag] = useState(false);
  const [FireStoreId, setFireStoreId] = useState();

  const ctaUpdateHandler = () => {
    if (Task != '') {
      dispatch(updateTodo(Task, description, FireStoreId));

      setTask('');
      setDescription('');
      setFlag(false);
    }
  };

  const ctaHandler = today => {
    console.log('ctaHaCalled');
    if (Task != '') {
      dispatch(addTodo(Task, today));
      setTask('');
      setDescription('');
    }
  };

  const ctaDelete = id => {
    dispatch(deleteTodo(id));
  };
  const ctaCheck = (id, boolean) => {
    dispatch(checkedTodo(id, boolean));
  };

  const UpdateItem = (item, id) => {
    setFireStoreId(id);
    console.log('updateId', id);
    setTask(item.name);
    setDescription(item.description);
    setFlag(true);
  };
  const openModal = () => {
    setModalVisible(true);
  };

  return [
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
    openModal,
  ];
}
