import { NavLink } from "react-router-dom"

import { Field } from "@fluentui/react-components"



export default (props) => {
    return <Field>
        <NavLink to={props.to} >{props.children}</NavLink>
    </Field>
}