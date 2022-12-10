import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter, getContacts } from "redux/selectors";
import { remove } from "redux/myItems/slice";
import styles from './ContactList.module.css';

const ContactItem = () => {
   const contacts = useSelector(getContacts);
   const dispatch = useDispatch();
   const filter = useSelector(getFilter);
   const visibleName = () => {
      return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
   };
   

   return (
      <table className={styles.list}>
         <tbody>
            {visibleName().map(({ id, name, number }) => (
               <tr className={styles.item} id={id} key={id}>
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

export default ContactItem;