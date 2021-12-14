import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { TextareaAutosize } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";

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
      console.log();
    },
  });

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h5">LET'S KEEP IN TOUCH</Typography>
        <div>
          <Typography variant="subtitle1">
            <PhoneIcon style={{ fontSize: 20, color: "#ffc815" }} /> 09357098527
          </Typography>
          <Typography variant="subtitle1">
            <MailOutlineIcon style={{ fontSize: 20, color: "#ffc815" }} />{" "}
            Navidsotoudehmehmehr@gmail.com
          </Typography>
          <Typography variant="subtitle1">
            <LocationOnIcon style={{ fontSize: 20, color: "#ffc815" }} /> Tehran
          </Typography>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          height: "60%",
          width: "50%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TextField
          variant="outlined"
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
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextareaAutosize
          rowsMin={10}
          id="message"
          label="message"
          placeholder="Your message"
          className={formik.errors.message ? "error" : null}
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
