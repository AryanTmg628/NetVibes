import * as Yup from "yup";

export const dnsConfigurationFormSchema = Yup.object().shape({
  primary_name_server: Yup.string().required(
    "Primary name server is required.",
  ),
  secondary_name_server: Yup.string().required(
    "Secondary name server is required.",
  ),
});
