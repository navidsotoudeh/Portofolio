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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  header: {
    width: "40",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  form: {
    display: "flex",
    height: "70%",
    width: "60%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "70%",
    },
  },
  textField: {
    width: "100%",
  },
}));
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
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.header}>
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
      <form onSubmit={formik.handleSubmit} className={classes.form}>
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
          className={classes.textField}
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
          className={classes.textField}
        />
        <TextareaAutosize
          rowsMin={5}
          id="message"
          label="message"
          placeholder="Your message"
          className={formik.errors.message ? "error" : null}
          onChange={formik.handleChange}
          value={formik.values.message}
          className={classes.textField}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
