import { useEffect, useState } from "react";
import { ContactForm } from "./ContactFrom/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { toast, Toaster } from "react-hot-toast";

export const App = () => {

  const [contacts, setContacts] = useState(localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : []);
  const [filter, setFilter] = useState();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const saveContact = (contact) => {
    if (contacts.find(obj => obj.name.toLowerCase() === contact.name.toLowerCase())) {
      const notify = () => toast.error('Contact is already in list.');
      return notify()
    }
    setContacts((prevContacts) => [...prevContacts, contact])
  };

  const deleteContact = (evt) => setContacts(contacts.filter(contact => contact.id !== evt.target.closest('li').id));

  const filterContacts = (evt) => setFilter(evt.target.value.trim());

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm saveContact={saveContact} />

      {contacts.length
        ? <><h2>Contacts</h2>
            <Filter filterValue={filterContacts} />
            <ContactList deleteContact={deleteContact} contacts={filter
              ? contacts.filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase()))
              : contacts} />
          </>
        : <p>Add some contacts</p>}
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </div>
  );
};
