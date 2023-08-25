import {useState, useEffect} from 'react'
import ContactDetail from './ContactDetail'
import { Link } from 'react-router-dom';

const ContactList = ({contacts, removeContact}) => {

  return (
    <div>
      <h2>Contact List {contacts.length}</h2>
      <Link to={'/addContact'}>Add Contact</Link>
      <ul>
        {contacts.map((contact)=>(
            <li key={contact.id}>
                <ContactDetail contact={contact} removeContact={removeContact}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList