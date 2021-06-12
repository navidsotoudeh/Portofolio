import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { TextareaAutosize, MenuItem } from "@material-ui/core";
import React from "react";
import MyDropzone from "./dropzone";

const jobCategory = [
  {
    value: "computer Engineer",
    label: "Computer Engineer",
  },
  {
    value: "civil Engineer",
    label: "Civil Engineer",
  },
  {
    value: "electrical Engineer",
    label: "Electrical Engineer",
  },
  {
    value: "Mechanical Engineer",
    label: "Mechanical Engineer",
  },
  {
    value: "chemical Engineer",
    label: "chemical Engineer",
  },
  {
    value: "I am not an engineer",
    label: "I am not an engineer",
  },
];

const validationSchema = yup.object({
  name: yup.string("Enter your Name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  job: yup.string().required("Select your course job"),
});

export default function ContactContent() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      job: "",
      file: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(); ////////////////////////////////////
    },
  });

  return (
    <div style={{ height: "100%" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helpertext={formik.touched.name ? formik.errors.name : ""}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          select
          id="job"
          label="job Category"
          value={formik.values.job}
          onChange={formik.handleChange("job")}
          error={formik.touched.course && Boolean(formik.errors.course)}
          margin="dense"
          variant="outlined"
          fullWidth
        >
          {jobCategory.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ width: "80%" }}>
            <TextareaAutosize
              rowsMin={10}
              id="message"
              label="message"
              placeholder="Your message"
              className={formik.errors.message ? "error" : null}
              onChange={formik.handleChange}
              value={formik.values.message}
              style={{ backgroundColor: "#e0f7fa", width: "90%" }}
            />
          </div>
          <div style={{ width: "20%" }}>
            <MyDropzone id="file" name="file" type="file" />
          </div>
        </div>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginTop: "50px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
