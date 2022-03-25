import { string, object } from "yup";

export const schema = object({
  firstName: string().required()
});
