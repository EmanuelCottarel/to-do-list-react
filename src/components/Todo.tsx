import React from 'react';
import {TodoInterface} from "../interfaces/todo";

const Todo: React.FC<TodoInterface> = ({id, name, completed}) => {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={id} type="checkbox" defaultChecked={completed}/>
                <label className="todo-label" htmlFor="todo-0">
                    {name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">Eat</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">Eat</span>
                </button>
            </div>
        </li>
    );
};

export default Todo;