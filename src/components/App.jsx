import React, { useState } from 'react';
import { BiX, BiUserPlus } from 'react-icons/bi';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
import css from 'components/App.module.css';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={css.container}>
        <h1 className={css.titleAplication}>
          Phone<span className={css.titleColor}>book</span>
        </h1>
        <button
          type="button"
          className={css.btnAddContact}
          onClick={toggleModal}
        >
          <BiUserPlus className={css.addModalIcon} size={25} />
        </button>
        {showModal && (
          <Modal onClose={toggleModal}>
            <h2 className={css.titleSection}>Add Contact</h2>
            <ContactForm onClose={toggleModal} />

            <button
              className={css.closeBtnModal}
              type="button"
              onClick={toggleModal}
            >
              <BiX className={css.closeBtnIcon} size={25} />
            </button>
          </Modal>
        )}
        <h2 className={css.titleSection}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
