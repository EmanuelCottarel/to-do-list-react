import React, {useState} from 'react';
import Form from './components/Form';
import Todo from "./components/Todo";
import {AppProps} from "./interfaces/AppProps";
import FilterButton from "./components/FilterButton";
import {nanoid} from "nanoid";
import {TodoInterface} from "./interfaces/todo";

const FILTER_MAP: Record<string, (task: TodoInterface) => boolean> = {
    All: () => true,
    Active: (task: TodoInterface) => !task.completed,
    Completed: (task: TodoInterface) => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);
const App: React.FC<AppProps> = (props) => {

    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');

    function toggleTaskCompleted(id: string) {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return {...task, completed: !task.completed};
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id: string) {
        const remainingTasks = tasks.filter((task) => task.id !== id);
        setTasks(remainingTasks);
    }

    function editTask(id: string, newName: string) {
        const editedTaskList = tasks.map((task) => {
            if (id === task.id) {
                return {...task, name: newName};
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map((task) =>
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />)

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ))

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    function addTask(name: string) {
        const newTask = {id: `todo-${nanoid()}`, name, completed: false};
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask}/>
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    );
}

export default App;
