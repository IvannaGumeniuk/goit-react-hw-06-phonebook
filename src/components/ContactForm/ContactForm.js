import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { add } from '../../redux/myItems/slice';
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contactsValue = useSelector(state => state.items);
    const dispatch = useDispatch();

    const handleChange = event => {
        const currentTarget = event.currentTarget.name;
        const value = event.currentTarget.value;
        if (currentTarget === 'name') {
            setName(value);
        }

        if (currentTarget === "number") {
            setNumber(value);
        }
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        const nameValue = contactsValue.map(ar => ar.name.toLowerCase());
            if (nameValue.includes(name.toLowerCase())) {
                alert(`${name} is alredy in your contacts`);
            } else {
                dispatch(add({ name, number, id: nanoid() }));
                setName('');
                setNumber('');
                }
        };

        return (
                <form className={styles.form} onSubmit={onSubmitForm}>
                    <label className={styles.name}> Name   
                        <input className={styles.input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <br></br>
                    <label className={styles.name}> Number  
                        <input className={styles.input}
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />         
                    </label>
                <br></br>
                <button type="submit"> Add contact </button>
                </form>
        )
    }