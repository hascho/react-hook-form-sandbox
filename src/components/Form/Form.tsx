import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";

import { schema } from "./Form.schema";
import type { FormState } from "./Form.types";

const defaultValues: FormState = {
  firstName: ""
};

export const Form = () => {
  const onSubmit: SubmitHandler<FormState> = (data) => {
    console.log(data);
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormState>({
    defaultValues,
    resolver: yupResolver(schema)
  });

  return (
    <form>
      <p>form</p>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id={field.name}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName?.message : ""}
            />
          )}
          name="firstName"
        />
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Submit
        </Button>
      </Box>
    </form>
  );
};
