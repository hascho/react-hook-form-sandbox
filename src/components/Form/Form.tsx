import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";

import { schema } from "./Form.schema";
import type { FormState } from "./Form.types";

export const Form = () => {
  const onSubmit: SubmitHandler<FormState> = (data) => {
    console.log(data);
  };

  const { control, handleSubmit } = useForm<FormState>({
    resolver: yupResolver(schema)
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>form</p>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => <TextField id="firstName" {...field} />}
      />
    </form>
  );
};
