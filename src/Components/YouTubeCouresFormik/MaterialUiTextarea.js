import React from "react";
import { Field } from "formik";
import "../../styles/youtubeCourseForFormik.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function MaterialUiTextarea(props) {
  const { name } = props;
  return (
    <div className="form-control">
      <Field name={name}>
        {({ form }) => (
          <TextareaAutosize
            error={form.errors[name] && form.touched[name]}
            helpertext={form.errors[name]}
            rowsMin={6}
            placeholder="Write your comments"
          />
        )}
      </Field>
    </div>
  );
}
