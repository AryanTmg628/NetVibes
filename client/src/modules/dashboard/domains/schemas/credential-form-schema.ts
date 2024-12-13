import * as Yup from "yup";

export const credentialFormSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required."),
  last_name: Yup.string().required("Last name is required."),
  state: Yup.string().required("State is required."),
  country: Yup.string().required("Country is required."),
  street_address: Yup.string().required("Street address is required."),
  city: Yup.string().required("City is required."),
  phone_number: Yup.string().required("Phone number is required."),
});
