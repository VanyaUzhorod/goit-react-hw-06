import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./App.module.css";
const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.text}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default App;
