import "./contactForm.css";
import { useFormik } from "formik";

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    source: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/i.test(values.name)) {
      errors.name = "Enter a valid full name";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d{10}$/i.test(values.phone)) {
      errors.phone = "Invalid phone number format"; // Adjust the error message as needed
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      onSubmit();
      console.log("Form data", values);
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form-container">
      <div className="form-control">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-control">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-control">
        <input
          type="phone"
          placeholder="Phone"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className="form-control">
        <select
          id="source"
          name="source"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.source}
          placeholder="How did you know about us?"
        >
          <option value="" disabled>
            How did you know about us?
          </option>
          <option value="search">Search Engine</option>
          <option value="social-media">Social Media</option>
          <option value="friend">Friend/Family</option>
          <option value="advertisement">Advertisement</option>
          <option value="other">Other</option>
        </select>
        {formik.touched.source && formik.errors.source ? (
          <div className="error">{formik.errors.source}</div>
        ) : null}
      </div>

      <button type="submit">SEND</button>
    </form>
  );
};

export default ContactForm;
