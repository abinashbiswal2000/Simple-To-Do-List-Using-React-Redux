import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/exports';
import { deleteTodo } from '../Redux/Todo/todoAction';


export default function Data() {

  const dispatch = useDispatch();

  const todosArray = useSelector((state) => { return state.changeTodoList })

  return (
    <div className='mt-5'>
      {todosArray.map(function (elem) {
        return (
          <div className="my-2 input-group" key={elem}>
            <input disabled value={elem} type="text" className="form-control" aria-label="Text input with checkbox" />
            <button onClick={function(){dispatch(deleteTodo(elem))}} className="btn btn-danger" type="button" id="button-addon2">&#9587;</button>
          </div>
        )
      })}
    </div>
  )
}
