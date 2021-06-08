import React from "react";
import Input from "./input_youtubeCourse";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButton";
import MaterialUiInput from "./MaterialUiInput";
import MaterialUiSelect from "./MaterialUiSelect";
import MaterialUiTextarea from "./MaterialUiTextarea";

export default function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
    case "date":
    case "MaterialUiInput":
      return <MaterialUiInput {...rest} />;
    case "MaterialUiSelect":
      return <MaterialUiSelect {...rest} />;
    case "MaterialUiTextarea":
      return <MaterialUiTextarea {...rest} />;

    default:
      return null;
  }
}
