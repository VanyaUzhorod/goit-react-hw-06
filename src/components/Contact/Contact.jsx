import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    //
    <div className={css.contact}>
      <p>
        {name} :{number}
      </p>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
