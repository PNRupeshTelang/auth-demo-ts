import React, { useState } from "react";

import { makeStyles, useId, Input, Label, Button, Body1, Body2, Dropdown } from "@fluentui/react-components";
import DynamicField from "./DynamicField";
import { kMaxLength } from "buffer";

const useStyles = makeStyles({
    stacked: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        // Stack the label above the field (with 2px gap per the design system)
        "> div": { display: "flex", flexDirection: "column" },
    },
    horizontal: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        flexWrap: "wrap",
        // Stack the label above the field (with 2px gap per the design system)
        "> div": { display: "flex", flexDirection: "row", justifyItems: "center", alignItems: "stretch", justifyContent: "space-between", gap: "2rem" },
    },
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",

        // Stack the label above the field (with 2px gap per the design system)
        "> div": { display: "flex", flexDirection: "row", justifyItems: "center", alignItems: "stretch", justifyContent: "space-between", gap: "2rem" },
    },

    heading: {
        display: "block",
        marginTop: "5px",
        marginBottom: "5px",
    }
});


export default (props) => {

    const [formData, setFormData] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
        props.onChange(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(event, formData);
        console.log(JSON.stringify(formData));
    }

    const styles = useStyles();

    const formOrientations = {
        "": styles.root,
        "stacked": styles.stacked,
        "horizontal": styles.horizontal
    }

    return (<div>

        <Label size="large" className={styles.heading}>{props.heading}</Label>

        <div className={formOrientations[props.formOrientation]}>

            {props.fields.map((field, index) => {
                return <DynamicField key={index} index={index} field={field} onChange={handleChange} />
            })}


            <Button onClick={handleSubmit} >Submit</Button>

        </div>

    </div>);
};
