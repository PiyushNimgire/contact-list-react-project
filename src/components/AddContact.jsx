import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddContact = ({addContact}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      username: username,
      phone: phone,
      email: email
    }
    // console.log(data);
    addContact(data);
    setName('');
    setUsername('');
    setPhone('');
    setEmail('');
    navigate('/');
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name'/>
        <input name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username'/>
        <input name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter phone'/>
        <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
        <button>Submit</button>
      </form>
      <div>
        <button onClick={()=> navigate('/')}>Home</button>
      </div>
    </div>
  )
}

export default AddContact