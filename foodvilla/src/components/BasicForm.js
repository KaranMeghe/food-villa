import { useFormik } from "formik";

function BasicForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const disableFormSubmission = (e) => {
    e.preventDefault();
    formik.values.firstName = "";
  };

  console.log(formik);

  return (
    <form
      autoComplete="off"
      onSubmit={disableFormSubmission}
      className="d-flex flex-column  align-items-center"
    >
      <div>
        <input
          className="p-2 border rounded my-2"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          id="firstName"
          type="text"
          placeholder="First name"
        />
      </div>

      <div>
        <input
          className="p-2 border rounded my-2"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          id="lastName"
          type="text"
          placeholder="Last Name"
        />
      </div>

      <div>
        <input
          className="p-2 border rounded my-2"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          type="email"
          placeholder="Enter your Email"
        />
      </div>

      <button className="btn btn-secondary my-2">Contact Us</button>
    </form>
  );
}

export default BasicForm;
