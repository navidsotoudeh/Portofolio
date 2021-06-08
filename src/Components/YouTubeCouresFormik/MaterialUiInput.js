import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

function MaterialUiInput(props) {
  const { label, name, formtext, ...rest } = props;
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field, form }) => (
          <TextField
            label={label}
            id={name}
            {...rest}
            {...field}
            error={form.errors[name] && form.touched[name]}
            helperText={form.errors[name]}
            style={{ width: "100%" }}
          ></TextField>
        )}
      </Field>
    </div>
  );
}

export default MaterialUiInput;
