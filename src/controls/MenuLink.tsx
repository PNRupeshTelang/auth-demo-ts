import { NavLink } from "react-router-dom"

import { Field, Link } from "@fluentui/react-components"



export default (props) => {
    return <Field>
        <Link appearance="subtle" href={props.to}>
            <NavLink to={props.to} >{props.children}</NavLink>
        </Link>
    </Field>
}