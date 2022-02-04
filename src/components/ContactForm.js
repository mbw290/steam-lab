import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const ContactForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: ""
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          phoneNumber: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Phone number is not valid"
              )
        })}
        
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First name"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last name"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="email@example.com"
          />
          <TextInput
            label='Phone Number'
            name='phoneNumber'
            type='tel'
            placeholder='(555) 555-5555'
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;