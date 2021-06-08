import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import "../../styles/youtubeCourseForFormik.css";
import * as Yup from "yup";
import TextError from "./TextError_YoutubeCourseForFormik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  social: {
    fb: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("this is required").nullable(),
  email: Yup.string().required("this is required").nullable(),
});

//if we want to define our costume validation for specific field :
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
};

export default function YoutybeCourseForFormik() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(frmk) => {
        console.log("Formik props are here :", frmk);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name={"name"} component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name={"email"}>
                {(errorMsg) => <div className={"error"}> {errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="write your comments"
                validate={validateComments}
              />
              <ErrorMessage name="comment" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field id="add" name="address">
                {({ field, form, meta }) => {
                  console.log("values", form.values);
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>
            <div className="form-control">
              <label htmlFor={"fb"}>Facebook profile</label>
              <Field type="text" id="fb" name="social.fb" />
            </div>
            <div className="form-control">
              <label htmlFor={"twitter"}>twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor={"primaryPhone"}>Primary Phone</label>
              <Field type="text" id="primaryPhone" name="phoneNumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor={"secondaryPhone"}>Secondary Phone</label>
              <Field type="text" id="secondaryPhone" name="phoneNumbers[1]" />
            </div>
            <div className="form-control">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {/*در اینجا از render props pattern استفاده کرده ایم یعنی یه تابع به این کامپوننت به عنوان چیلدرن پاس داده ایم که به صورت اتوماتیک پراپس میگیره و jsx تحویل دادیم*/}
                {({ push, remove, form }) => {
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      <button
                        type="button"
                        onClick={() => remove()}
                        disabled={values.phNumbers.length < 2}
                      >
                        -
                      </button>
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                      {phNumbers.map((phNumbers, indx) => (
                        <div key={indx}>
                          <Field name={`phNumbers[${indx}]`}></Field>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button type="submit" disabled={!frmk.isValid || frmk.isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
