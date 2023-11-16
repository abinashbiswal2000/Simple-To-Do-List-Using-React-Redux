import React , { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import addTodo from '../Redux/Todo/todoAction';

export default function InputBar() {

    const dispatch = useDispatch();

    const [initialValue, setInitialValue] = useState("");


    function kaka() {
        dispatch(addTodo(initialValue));
        setInitialValue('')
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input value={initialValue} onChange={function (event) { setInitialValue(event.target.value) }} type="text" className="form-control" placeholder="Add A New Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={kaka} className="btn btn-primary" type="button" id="button-addon2">Add</button>
            </div>
        </div>
    )
}
