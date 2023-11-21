import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from './filterSlice';
import { setFilter } from 'redux/filterSlice';
import css from "../RegisterForm/RegisterForm.module.css";

const Filter = () => {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.form}>
      <label className={css.label}>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          name="filter"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
export default Filter;