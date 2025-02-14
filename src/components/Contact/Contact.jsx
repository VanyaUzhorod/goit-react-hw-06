import css from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css.contact}>
      <p>
        {contact.name} :{contact.number}
      </p>
      <button onClick={() => deleteContact(contact.id)} className={css.button}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
