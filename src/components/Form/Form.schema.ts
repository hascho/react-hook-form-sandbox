import { string, object } from "yup";

export const schema = object({
  name: string()
    .min(2)
    .max(100)
    .matches(RegExp(/[\p{L} .-]+/gu), "incorrect format")
    .required(),
  address: string().required(),
  postcode: string().optional(),
  country: string().required(),
  telephone: string()
    .max(30)
    .matches(RegExp(/[\d +-]+/g), "incorrect format")
    .required()
});
