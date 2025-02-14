import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import css from "./App.module.css";
const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const [searchItem, setSearchItem] = useState("");

  const hendleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const filterAddContact = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
  );
  const hendleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  return (
    <div className={css.container}>
      <h1 className={css.text}>PhoneBook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox onChange={hendleSearchChange} value={searchItem} />

      <ContactList
        contacts={filterAddContact}
        deleteContact={hendleDeleteContact}
      />
    </div>
  );
};
export default App;
