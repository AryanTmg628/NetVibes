import * as Yup from "yup";

export const PersonalInformationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required."),
  last_name: Yup.string().required("Last name is required."),
  state: Yup.string().required("State is required."),
  country: Yup.string().required("Select your country"),
  street_address: Yup.string().required("Street address is required."),
  city: Yup.string().required("City is required."),
  phone_number: Yup.string().required("Phone number is required."),
});

export const AccountSecuirtyInformationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  username: Yup.string().required("Username is required."),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters.")
    .required("Password is required."),
  confirm_password: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Password and confirm password must match.",
    )
    .required("Confirm password is required."),
});
