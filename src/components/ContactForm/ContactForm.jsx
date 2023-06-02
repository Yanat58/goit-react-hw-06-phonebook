import React from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { BiUserPlus } from 'react-icons/bi';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'feature/contactSlice';

export const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contact.contacts);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');

  // const handelChange = e => {
  //   const { name, value } = e.currentTarget.value;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  const handelSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const nameIsExist = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    const numberIsExist = contacts.some(
      contact => contact.number.trim() === number.trim()
    );

    if (nameIsExist) {
      Notiflix.Report.warning(`This name is already in contacts`);
      return;
    } else if (numberIsExist) {
      Notiflix.Report.warning(`This number is already in contacts`);
      return;
    } else {
      dispatch(addContact(newContact));
    }

    setName('');
    setNumber('');
    onClose();
  };

  return (
    <form className={css.formBox} onSubmit={handelSubmit}>
      <label className={css.label}>
        <b className={css.labelText}>Name</b>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>
      <label className={css.label}>
        <b className={css.labelText}>Number</b>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>

      <button
        className={css.btnAdd}
        type="submit"
        onClick={() => handelSubmit()}
      >
        <BiUserPlus className={css.btnAddIcon} size={25} />
        <span className={css.btnAddText}>Add contact</span>
      </button>
    </form>
  );
};
