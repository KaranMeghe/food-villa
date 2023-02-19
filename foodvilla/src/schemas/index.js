import * as yup from "yup";

export const basicSchema = yup.object({
  firstName: yup
    .string("Charcter length should be minimum 3 and maximum 12")
    .min(3)
    .max(24)
    .required("Please Enter Your First Name"),

  lastName: yup
    .string("Charcter length should be minimum 3 and maximum 12")
    .min(3)
    .max(24)
    .required("Please Enter Your Last Name"),

  email: yup.string().email().required("Please Enter Your email"),
});
