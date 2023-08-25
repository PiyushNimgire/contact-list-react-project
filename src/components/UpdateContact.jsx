import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateContact = ({ updateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
  });

  async function fetchContact(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const contactData = await response.json();
    setContact(contactData);
  }

  useEffect(() => {
    fetchContact(id);
  }, [id]); // Fetch when the id parameter changes

  function handleSubmit(e) {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      username: e.target.username.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    setContact(newContact);
    updateContact(id, newContact); 
    navigate('/');
  }

  const handleChange = (event) => {
    const newValue = event.target.value;
    const fieldName = event.target.name;
    if(fieldName === 'name'){
      setContact({...contact, name:newValue});
    }else if(fieldName === 'username'){
      setContact({...contact, username:newValue});
    }else if(fieldName === 'phone'){
      setContact({...contact, phone:newValue});
    }else if(fieldName === 'email'){
      setContact({...contact, email:newValue});
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={contact.name} onChange={ handleChange} placeholder="Enter name" />
        <input name="username" value={contact.username} onChange={ handleChange} placeholder="Enter username" />
        <input name="phone" value={contact.phone} onChange={ handleChange} placeholder="Enter phone" />
        <input name="email" value={contact.email} onChange={ handleChange} placeholder="Enter email" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={()=> navigate('/')}>Home</button>
      </div>
    </div>
  );
};

export default UpdateContact;
