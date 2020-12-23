import React from "react";
import { FormControl, InputAdornment, TextField } from "@material-ui/core";

const InputField = ({
  type,
  name,
  onChange,
  placeholder,
  value,
  disabled,
  suffixIcon,
  prefixIcon,
}) => {
  return (
    <div className="text-field">
      <FormControl className="input">
        <TextField
          InputProps={{ disableUnderline: true }}
          name={name}
          type={type}
          onChange={onChange}
          autoComplete={"off"}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          endAdornment={
            suffixIcon && (
              <InputAdornment position="end">{suffixIcon}</InputAdornment>
            )
          }
          startAdornment={
            prefixIcon && (
              <InputAdornment position="start">{prefixIcon}</InputAdornment>
            )
          }
        />
      </FormControl>
    </div>
  );
};

export default InputField;
