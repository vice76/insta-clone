import React from "react";
import { FormControl, TextField } from "@material-ui/core";

const InputField = ({
  type,
  name,
  onChange,
  placeholder,
  value,
  disabled,
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
          
        />
      </FormControl>
    </div>
  );
};

export default InputField;
