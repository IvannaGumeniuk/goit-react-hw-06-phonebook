import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/filter/slice';
// import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = () => {
    const value = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <label> Find contacts by name:
            <input className={styles.title}
                type="text"
                name="filter"
                value={value}
                onChange={event => dispatch(filter(event.currentTarget.value))}
            />
        </label>
    );
};

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

export default Filter;