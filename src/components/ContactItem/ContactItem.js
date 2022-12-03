import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "redux/myItems/slice";
// import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = () => {
   const contacts = useSelector(state => state.items);
   const dispatch = useDispatch();
   const filter = useSelector(state => state.filter);
   const visibleName = () => {
      return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
   };
   

   return (
      <table className={styles.list}>
         <tbody>
            {visibleName().map(({ id, name, number }) => (
               <tr className={styles.item} id={id}>
                  <td>{name}: {number}</td>
                  <td>
                     <button className={styles.button}
                        type="button"
                        onClick={() => dispatch(remove(id))}
                     > Delete
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )}

// ContactItem.propType = {
//    id: PropTypes.string.isRequired,
//    name: PropTypes.string.isRequired,
//    number: PropTypes.string.isRequired,
//    deleteContact: PropTypes.func.isRequired,
// };

export default ContactItem;