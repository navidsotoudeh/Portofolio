import React from "react";
import { Formik, Form } from "formik";
import "../../styles/youtubeCourseForFormik.css";
import * as Yup from "yup";
import FormikControl from "./FormikController_YouTubeCourse";

export default function FormikContainer() {
  const dropdownOpitons = [
    { key: "Select a category", value: "" },
    { key: "Software", value: "Software" },
    { key: "Civil", value: "Civil" },
    { key: "Medicine", value: "Medicine" },
  ];
  const radioOptions = [
    { key: "male", value: "make" },
    { key: "Female", value: "Female" },
  ];
  const initialValues = {
    name: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOptions: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("form data", values);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form style={{ width: "50%" }}>
          <FormikControl
            control="input"
            type="name"
            label="Name & family"
            name="name"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="select"
            label="Job category"
            name="selectOption"
            options={dropdownOpitons}
          />
          <FormikControl
            control="radio"
            label="radio topic"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl
            control="textarea"
            label="description"
            name="description"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
