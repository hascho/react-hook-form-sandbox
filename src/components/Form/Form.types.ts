import { InferType } from "yup";
import { schema } from "./Form.schema";

export type FormState = InferType<typeof schema>;
