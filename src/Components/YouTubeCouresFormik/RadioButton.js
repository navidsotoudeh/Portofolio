import React from "react";
import { Field } from "formik";
import "../../styles/youtubeCourseForFormik.css";

export default function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={options.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}> {option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
}
