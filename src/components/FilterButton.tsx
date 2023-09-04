import React from 'react';
import {FilterButtonProps} from "../interfaces/FilterButtonProps";

const FilterButton: React.FC<FilterButtonProps> = ({key, name, isPressed, setFilter}) => {
    return (
        <button
            type="button"
            className="btn toggle-btn"
            aria-pressed={isPressed}
            onClick={() => setFilter(name)}>
            <span className="visually-hidden">Show </span>
            <span>{name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
};

export default FilterButton;