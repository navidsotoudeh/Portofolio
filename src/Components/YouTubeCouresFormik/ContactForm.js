import React, { useState } from "react";
import { Formik, Form } from "formik";
import "../../styles/youtubeCourseForFormik.css";
import * as Yup from "yup";
import FormikControl from "./FormikController_YouTubeCourse";
import Button from "@material-ui/core/Button";
import MyDropzone from "../dropzone";

export default function ContactForm() {
  const dropdownOpitons = [
    { key: "Software", value: "Software" },
    { key: "Civil", value: "Civil" },
    { key: "Medicine", value: "Medicine" },
  ];
  // const radioOptions = [
  //   { key: "male", value: "make" },
  //   { key: "Female", value: "Female" },
  // ];
  const initialValues = {
    family: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };
  const validationSchema = Yup.object({
    family: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    selectOption: Yup.string().required("Required"),
    // description: Yup.string().required("لطفا نظر دهید"),
  });
  const [files, setFiles] = useState([]);
  const onSubmit = (values) => {
    console.log("form data", { ...values, images: files });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log("Formil props", formik);
        return (
          <Form style={{ width: "50%" }}>
            <FormikControl
              control="MaterialUiInput"
              type="name"
              label="Name & family"
              name="family"
            />
            <FormikControl
              control="MaterialUiInput"
              type="email"
              label="Email"
              name="email"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <FormikControl
                control="MaterialUiSelect"
                label="Job category"
                name="selectOption"
                options={dropdownOpitons}
              />
              <MyDropzone files={files} setFiles={setFiles} />
            </div>

            <FormikControl
              control="MaterialUiTextarea"
              label="description"
              name="description"
            />

            <Button
              type="submit"
              disabled={!formik.isValid}
              variant="contained"
              color="primary"
            >
              submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
