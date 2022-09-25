import * as Yup from "yup";

//Validation Schema using Formik Yup
export const groupSchema = Yup.object({
  title: Yup.string()
    .min(3, "! Enter atleast 3 characters")
    .max(25, "! Enter upto 25 characters")
    .required("! Please enter the group name."),
  description: Yup.string(),
});

export const termSchema = Yup.object({
  termTitle: Yup.string()
    .min(3, "! Enter atleast 3 characters")
    .max(25, "! Enter upto 25 characters")
    .required("! Please enter the term name."),
  termDefinition: Yup.string().required("! Please enter the definition."),
});
