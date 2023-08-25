import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactDetail = ({contact, removeContact}) => {
  const navigate = useNavigate();
  return (
    <div>
        <h3>{contact.name}</h3>
        <p>{contact.username}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <button onClick={() => navigate(`/updateContact/${contact.id}`)}>Update</button>
        <button onClick={() => removeContact(contact.id)}>Delete</button>
    </div>
  )
}

export default ContactDetail