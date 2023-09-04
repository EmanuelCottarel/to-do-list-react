import React, {ChangeEvent, useState} from 'react';
import {TodoProps} from "../interfaces/TodoProps";

const Todo: React.FC<TodoProps> = ({id, name, completed, deleteTask, editTask, toggleTaskCompleted}) => {

    const [newName, setNewName] = useState("");


    const [isEditing, setIsEditing] = useState(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setNewName(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        editTask(id, newName);
        setNewName("");
        setIsEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={id}>
                    New name for {name}
                </label>
                <input id={id} className="todo-text" type="text" value={newName} onChange={handleChange}/>
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setIsEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {name}</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={id}
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={() => toggleTaskCompleted(id)}
                />
                <label className="todo-label" htmlFor={id}>
                    {name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setIsEditing(true)}>
                    Edit <span className="visually-hidden">{name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => deleteTask(id)}>
                    Delete <span className="visually-hidden">{name}</span>
                </button>
            </div>
        </div>
    );


    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;