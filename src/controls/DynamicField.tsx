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
        gap: "2rem"
    },

    label: {
        flexBasis: "30%"
    },
    input: {
        flexBasis: "70%"
    }
});

export default ({ index, field }) => {

    const inputId = useId(`field-input-${field.fieldName}`);

    const styles = useStyles();

    var inputProps: Partial<InputProps> = {
        tabIndex: index,
        ...field
    };

    var dropdownProps: Partial<DropdownProps> = {
        label: getProperCaseWithSpace(field.fieldName),
        ...field
    }

    var switchProps: Partial<SwitchProps> = {
        label: getProperCaseWithSpace(field.fieldName),
        ...field
    }

    const getInputField = (type) => {
        switch (type) {
            case "dropdwon":
                return <Dropdown size="medium" id={inputId} className={styles.input} {...dropdownProps} />;

            case "switch":
                return <Switch size={2} id={inputId} className={styles.input} {...switchProps} />;

            default:
                return <Input size="medium" id={inputId} className={styles.input} {...inputProps} />;
        }
    }

    return (
        <Field className={styles.root}>
            <Label size="medium" htmlFor={inputId} className={styles.label} >
                {getProperCaseWithSpace(field.fieldName)}
            </Label>
            {getInputField(field.type)}
        </Field>
    );
};
