import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import { RouterProvider, createBrowserRouter, redirect, useNavigate } from "react-router-dom";
import AddContact from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";


function App() {

  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const contacts = await response.json();
      console.log(contacts);
      setContacts(contacts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = (data) => {
    const newContacts = [...contacts, data];
    setContacts(newContacts);
  }

  const removeContact = async (id) => {
    const contact = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });
    if(contact.status === 200){
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
    }
  }

  const updateContact = async(id, newContact) => {
    const jsonContact = JSON.stringify(newContact);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                                method: 'PATCH',
                                body: jsonContact,
                                headers: {
                                  'Content-type': 'application/json; charset=UTF-8',
                                },
  })

  if(response.status === 200){
    const newContacts = contacts.filter((contact) => contact.id!==Number(id));
    setContacts([...newContacts, newContact])
  }
    
  }

  const router = createBrowserRouter([
    {path:'/', element: <ContactList contacts={contacts} removeContact={removeContact}/>},
    {path:'/addContact', element: <AddContact addContact={addContact}/>},
    {path:'/updateContact/:id', element: <UpdateContact updateContact={updateContact}/>}
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
