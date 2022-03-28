import { useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { countries } from "./constants";

export const CountrySelect = () => {
  const { control } = useFormContext();

  const options = useMemo(() => {
    return countries.map(({ code, label }) => (
      <MenuItem key={code} value={code}>
        {label}
      </MenuItem>
    ));
  }, []);

  return (
    <Controller
      name="country"
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id="country-select-label">Country or region</InputLabel>
          <Select
            {...field}
            labelId="country-select-label"
            id="country-select"
            label="Country or region"
          >
            <MenuItem value="SPACER" />
            {options}
          </Select>
        </FormControl>
      )}
    />
  );
};
