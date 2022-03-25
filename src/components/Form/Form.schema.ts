import { string, object } from "yup";

export const schema = object({
  firstName: string().min(2).required()
});
