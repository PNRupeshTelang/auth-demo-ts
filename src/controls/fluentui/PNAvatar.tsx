
import {
    Avatar,
    Badge,
} from "@fluentui/react-components";

import {
    PeopleFilled

} from "@fluentui/react-icons"



import {
    AccessTimeFilled,
    AccessTimeRegular,
    bundleIcon,
    iconFilledClassName,
    iconRegularClassName,
} from "@fluentui/react-icons";
import {
    Body1Stronger,
    makeStyles,
    shorthands,
    tokens,
} from "@fluentui/react-components";



const useClasses = makeStyles({
    container: {
        fontSize: "32px",
        ":hover": {
            [`& .${iconFilledClassName}`]: {
                display: "block",
            },
            [`& .${iconRegularClassName}`]: {
                display: "none",
            },
        },
        "> svg": {
            color: tokens.colorBrandForeground2,
            fontSize: "32px",
        },
    }
});

export const PNAvatar = (props) => {
    return <Avatar
        color="colorful"
        aria-label="Avatar"
        size={props.size || 32}
        icon={props.icon}
        name={props.name}
        shape={props.shape || "circular"}
    />
}


export const BundleIcon = (props) => {
    const classes = useClasses();
    return (
        <>
            <div className={classes.container}>
                {props.bundledIcon}
            </div>
        </>
    );
};