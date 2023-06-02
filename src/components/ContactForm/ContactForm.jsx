import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { BiUserPlus } from 'react-icons/bi';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'feature/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  console.log(dispatch)
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
   
  };

  const addContactHandler =() => {
    const contact = {
      id: nanoid(),
          name ,
          number,
    }
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  }
 
    
 

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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button className={css.btnAdd} type="submit">
        <BiUserPlus className={css.btnAddIcon} size={25} />
        <span className={css.btnAddText}>Add contact</span>
      </button>
    </form>
  );
};

ContactForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
