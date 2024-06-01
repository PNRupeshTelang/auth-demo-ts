import React from "react";

import { makeStyles, useId, Input, Label, Button, Body1, Body2, Dropdown } from "@fluentui/react-components";
import DynamicField from "./DynamicField";
import { kMaxLength } from "buffer";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "600px",
        // Stack the label above the field (with 2px gap per the design system)
        "> div": { display: "flex", justifyItems: "center", alignItems: "stretch", justifyContent: "space-between", flexDirection: "row", gap: "2rem" },
    },
    heading: {
        display: "block",
        marginTop: "5px",
        marginBottom: "5px",
    }
});


export default (props) => {

    const styles = useStyles();



    return (<div>

        <Label size="large" className={styles.heading}>{props.heading}</Label>

        <div className={styles.root}>

            {props.fields.map((field, index) => {
                return <DynamicField key={index} index={index} field={field} />
            })}



        </div>

    </div>);
};
