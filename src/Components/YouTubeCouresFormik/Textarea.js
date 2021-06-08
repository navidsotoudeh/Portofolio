import React from "react";
import { Field, ErrorMessage } from "formik";
import "../../styles/youtubeCourseForFormik.css";
import TextError from "./TextError_YoutubeCourseForFormik";

export default function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
