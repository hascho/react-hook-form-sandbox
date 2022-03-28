import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";

import { schema } from "./Form.schema";
import type { FormState } from "./Form.types";

const defaultValues: FormState = {
  name: "",
  address: "",
  postcode: "",
  telephone: ""
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
      <h2>Delivery Address</h2>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id={field.name}
              autoComplete="name"
              label="Name"
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message : ""}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id={field.name}
              autoComplete="street-address"
              label="Address"
              multiline
              minRows={4}
              error={!!errors.address}
              helperText={errors.address ? errors.address?.message : ""}
            />
          )}
        />
        <Controller
          name="postcode"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id={field.name}
              autoComplete="postal-code"
              label="ZIP or postal code (optional)"
              error={!!errors.postcode}
              helperText={errors.postcode ? errors.postcode?.message : ""}
            />
          )}
        />
        <Controller
          name="telephone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id={field.name}
              label="Telephone"
              type="tel"
              autoComplete="tel"
              inputProps={{ enterKeyHint: "done" }}
              error={!!errors.telephone}
              helperText={errors.telephone ? errors.telephone?.message : ""}
            />
          )}
        />
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Save address
        </Button>
      </Box>
    </form>
  );
};
