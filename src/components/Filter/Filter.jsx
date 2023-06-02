import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'feature/contactSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();

  const changeFilterHandler = e =>
    dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={css.filterLabel}>
      <b className={css.filterText}>Find contacts by name</b>

      <input
        className={css.filterInput}
        type="text"
        value={filter}
        placeholder="search"
        onChange={changeFilterHandler}
      />
    </label>
  );
};
