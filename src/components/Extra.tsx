import React from "react";

import { makeStyles, useId, Input, Label, Button, Body1, Body2, RadioGroup, Radio, Field, RadioGroupProps } from "@fluentui/react-components";
import FormInput from "../controls/DynamicField";
import DynamicForm from "../controls/DynamicForm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "600px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", justifyItems: "center", alignItems: "stretch", justifyContent: "space-between", flexDirection: "row", gap: "2rem" },
  },
  label: {
    flexBasis: "30%"
  },
  input: {
    flexBasis: "70%"
  }
});


const Extra = () => {
  const smallId = useId("input-small");
  const mediumId = useId("input-medium");
  const largeId = useId("input-large");
  const largeId2 = useId("input-large2");
  const inputSize = useId("input-size");

  const radio = useId("radio");

  const styles = useStyles();

  var radioProps: Partial<RadioGroupProps> = { layout: "vertical" }

  const fields = [
    { fieldName: 'userName', type: 'text', maxLength: 12 },
    { fieldName: 'mobileNo', type: 'tel' },
    { fieldName: 'emailId', type: 'email' },
    { fieldName: 'birthDate', type: 'date' },
    { fieldName: 'marks', type: 'number' },
    { fieldName: 'category', type: 'dropdown' },
    { fieldName: 'nationality', type: 'switch' },
  ];

  const fieldStudent = [
    { fieldName: 'studentName', type: 'text', maxLength: 5, displayName: "Employee Name Employee Name Employee Name Employee Name Employee Name" },
    { fieldName: 'rollNo', type: 'text' },
    { fieldName: 'emailId', type: 'email' },
    { fieldName: 'birthDate', type: 'date' },
    { fieldName: 'marks', type: 'number' },
    { fieldName: 'Division', type: 'number' },
    { fieldName: 'category', type: 'dropdown', itemsSP: "" },
    { fieldName: 'sportsQuota', type: 'switch' },
  ];


  const handleChange = (event) => {

    console.log("changed", event.target.name);
  }

  const handleSubmit = (event, formData) => {
    console.log("submitted", { ...formData, RowsAffecting: 1 });
  }

  return (<div>

    <Label>Extra page</Label>

    <DynamicForm heading="Dynamic Form" fields={fields} formOrientation="stacked" onChange={handleChange} onSubmit={handleSubmit} />

    <hr />

    <DynamicForm heading="Student Form" fields={fieldStudent} formOrientation="" onChange={handleChange} onSubmit={handleSubmit} />

    <hr />

    <DynamicForm heading="Student Form" fields={fieldStudent} formOrientation="horizontal" onChange={handleChange} onSubmit={handleSubmit} />

  </div>);
};

export default Extra;
