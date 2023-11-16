import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import Data from './Components/Data';
import InputBar from './Components/InputBar';
import addTodo from './Redux/Todo/todoAction';


export default function App() {

  const todosArray = useSelector(function (state) { return state.changeTodoList })
  const dispatch = useDispatch();

  const [initialValue, setInitialValue] = useState("");


  function kaka() {
    dispatch(addTodo(initialValue));
    setInitialValue('')
  }



  return (
    <div className='bg-dark text-light bg-gradient mx-auto mt-5 border border-dark border-3 p-3' style={{ maxWidth: "500px" }}>
      <div className="text-decoration-underline fs-1 mb-3 text-center">To-Do List</div>
      <InputBar />
      <Data />
    </div>
  )
}
