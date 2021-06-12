import React from "react";
import { Field } from "formik";
import "../../styles/youtubeCourseForFormik.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function MaterialUiSelect(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control" style={{ width: "50%" }}>
      <Field name={name}>
        {({ field, form }) => (
          <>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Select
              label={label}
              id={name}
              {...rest}
              {...field}
              helpertext={form.errors[name]}
              style={{ width: "100%" }}
            >
              {options.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.key}
                  </MenuItem>
                );
              })}
            </Select>
            {form.errors[name] && form.touched[name] && (
              <FormHelperText style={{ color: "red" }}>
                {form.errors[name]}
              </FormHelperText>
            )}
          </>
        )}
      </Field>
    </div>
  );
}
