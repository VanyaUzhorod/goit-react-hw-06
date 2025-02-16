import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    values.name, values.number;
    resetForm();
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const onlyNumbers = /^[0-9]+$/;

  const validationShema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Required")
      .matches(onlyLetters, "Only letters"),
    number: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Required")
      .matches(onlyNumbers, "Only numbers"),
  });

  return (
    <section className={css.container}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationShema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.box}>
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                type="text"
                className={css.item}
                placeholder="Enter name"
              />
              <ErrorMessage className={css.error} name="name" component="div" />
            </div>
            <div className={css.box}>
              <label htmlFor="number">Number</label>
              <Field
                name="number"
                type="text"
                className={css.item}
                placeholder="Enter number"
              />
              <ErrorMessage
                className={css.error}
                name="number"
                component="div"
              />
            </div>
            <button type="submit" className={css.btn}>
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default ContactForm;
