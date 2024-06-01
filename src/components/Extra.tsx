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
  ]

  return (<div>

    <Label>Extra page</Label>


    <DynamicForm heading="Dynamic Form" fields={fields} />


    <form style={{ marginTop: "3rem" }}>

      <hr />

      <Field label="Favorite Fruit">
        <RadioGroup id={radio} layout="horizontal" onChange={(ev, data) => console.log(data.value)}>
          <Radio value="apple" label="Apple" />
          <Radio value="pear" label="Pear" />
          <Radio value="banana" label="Banana" />
          <Radio value="orange" label="Orange" />
        </RadioGroup>
      </Field>
      <hr />
      <div className={styles.root}>
        <div>
          <Label size="medium" htmlFor="sample" className={styles.label} >
            Sample
          </Label>
          <Input size="medium" id="sample" className={styles.input} />
        </div>
        <hr />
        <Label size="large">Input types</Label>
        <div>
          <Label size="small" htmlFor="text" className={styles.label} >
            Text (Default)
          </Label>
          <Input size="small" id="text" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="date" className={styles.label} >
            Date
          </Label>
          <Input size="small" type="date" id="date" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="datetime" className={styles.label} >
            DateTime Local
          </Label>
          <Input size="small" type="datetime-local" id="datetime" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="email" className={styles.label} >
            Email
          </Label>
          <Input size="small" type="email" id="email" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="month" className={styles.label} >
            Month
          </Label>
          <Input size="small" type="month" id="month" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="number" className={styles.label} >
            Number
          </Label>
          <Input size="small" type="number" id="number" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="password" className={styles.label} >
            Password
          </Label>
          <Input size="small" type="password" id="password" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="search" className={styles.label} >
            Search
          </Label>
          <Input size="small" type="search" id="search" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="tel" className={styles.label} >
            Tel
          </Label>
          <Input size="small" type="tel" id="tel" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="time" className={styles.label} >
            Time
          </Label>
          <Input size="small" type="time" id="time" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="url" className={styles.label} >
            Url
          </Label>
          <Input size="small" type="url" id="url" className={styles.input} />
        </div>
        <div>
          <Label size="small" htmlFor="week" className={styles.label} >
            Week
          </Label>
          <Input size="small" type="week" id="week" className={styles.input} />
        </div>


      </div>
    </form>
  </div>);
};

export default Extra;
