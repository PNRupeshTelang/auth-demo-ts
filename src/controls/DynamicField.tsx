import React from "react";

import { makeStyles, useId, Input, Label, Button, Body1, Body2, InputProps, Dropdown, DropdownProps, Field, Switch, SwitchProps } from "@fluentui/react-components";
import { getProperCaseWithSpace } from "../utils/StringHelpers";


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyItems: "center",
        alignItems: "stretch",
        justifyContent: "space-between",
        flexDirection: "row",
        gap: "0.5rem"
    },

    label: {
        flexBasis: "30%"
    },
    input: {
        flexBasis: "70%"
    }
});

export default ({ index, field, onChange }) => {

    const inputId = useId(`field-input-${field.fieldName}`);

    const styles = useStyles();

    field = {
        displayName: getProperCaseWithSpace(field.fieldName),
        ...field,
    }

    var inputProps: Partial<InputProps> = {
        id: inputId,
        className: styles.input,
        tabIndex: index,

        placeholder: getProperCaseWithSpace(field.fieldName),
        name: field.fieldName,
        size: "medium",
        ...field
    };

    var dropdownProps: Partial<DropdownProps> = {
        id: inputId,
        className: styles.input,
        tabIndex: index,
        placeholder: getProperCaseWithSpace(field.fieldName),
        name: field.fieldName,
        size: "medium",
        label: getProperCaseWithSpace(field.fieldName),
        ...field
    }

    var switchProps: Partial<SwitchProps> = {
        id: inputId,
        className: styles.input,
        tabIndex: index,
        name: field.fieldName,
        label: getProperCaseWithSpace(field.fieldName),
        ...field
    }

    var textProps = {
        id: inputId,
        className: styles.input,
        tabIndex: index,
        name: field.fieldName,
    }


    const getInputField = (type) => {
        switch (type) {
            case "dropdwon":
                return <Dropdown {...dropdownProps} />;

            case "switch":
                return <Switch {...switchProps} />;

            case "simple":
                return <input type="text" {...textProps} ></input>

            default:
                return <Input {...inputProps} onChange={onChange} />;
        }
    }

    return (
        <Field className={styles.root}>
            <Label size="medium" htmlFor={inputId} className={styles.label} >
                {field.displayName}
            </Label>
            {getInputField(field.type)}
        </Field>
    );
};
