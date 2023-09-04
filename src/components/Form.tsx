import React, {ChangeEvent, useState} from 'react';
import {FormProps} from "../interfaces/FormProps";

const Form: React.FC<FormProps> = ({addTask}) => {

    const [name, setName] = useState("");



    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        addTask(name);
        setName("");
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }

    return (
         <form onSubmit={handleSubmit}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
    );
};

export default Form;