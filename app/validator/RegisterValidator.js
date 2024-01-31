import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username must required"),
  password: Yup.string()
    .min(6, "Password must 6 characters")
    .required("Password must required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords not match"),
  email: Yup.string().email("Invalid email").required("Email must required"),
  fullName: Yup.string().required("Full name must required"),
  address: Yup.string().required("Address must required"),
  mobilePhone: Yup.string().required("Mobile phone must required"),
});

export default RegisterSchema;
