import { useFormik } from "formik";
import { buisnessSchema } from "../schemas";

function AdvancedForm() {
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        number: "",
      },
      validationSchema: buisnessSchema,
      onSubmit: (values, { resetForm }) => {
        console.log("Submiting the form", values);
        resetForm(values);
      },
    });
  return (
    <div className="text-center">
      <h3 style={{ color: "#fd7e14" }} className="my-4">
        For a Buisness Enquries, Contact Us
      </h3>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            className="p-2 border rounded my-2"
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>

        <div>
          <input
            name="number"
            type="number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your number"
            className="p-2 border rounded my-2"
          />
          {errors.number && touched.number ? <p>{errors.number}</p> : null}
        </div>

        <button
          type="submit"
          className="btn my-3"
          style={{ backgroundColor: "#fd7e14", color: "#fff" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdvancedForm;
