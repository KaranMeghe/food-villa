import { useFormik } from "formik";
import { basicSchema } from "../schemas";

function BasicForm() {
  const { handleChange, errors, touched, handleBlur, values, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log("Submiting form", values);
        resetForm(values);
      },

      validationSchema: basicSchema,
    });

  return (
    <div>
      <h3 style={{ color: "#fd7e14" }} className="my-4 text-center">
        For any Enquries, Contact Us
      </h3>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="d-flex flex-column  align-items-center"
      >
        <div>
          <input
            className="p-2  border rounded my-2"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
          />
          {errors.firstName && touched.firstName ? (
            <p>{errors.firstName}</p>
          ) : null}
        </div>

        <div>
          <input
            className="p-2 border rounded my-2"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          {errors.lastName && touched.lastName ? (
            <p>{errors.lastName}</p>
          ) : null}
        </div>

        <div>
          <input
            className="p-2 border rounded my-2"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>

        <button className="btn btn-secondary my-2" type="submit">
          Contact Us
        </button>
      </form>
    </div>
  );
}

export default BasicForm;
