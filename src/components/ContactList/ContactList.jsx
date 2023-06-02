import React from 'react';
import { BiUserMinus } from 'react-icons/bi';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'feature/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contact.contacts);
  // const filter = useSelector(state => state.contact.filter);

  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactItem} key={id}>
            <p className={css.contactName}>{name}:</p>
            <p className={css.contactNumber}>{number}</p>
            <button
              className={css.deletBtn}
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              <span>
                <BiUserMinus className={css.btnDeleteIcon} size={20} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
