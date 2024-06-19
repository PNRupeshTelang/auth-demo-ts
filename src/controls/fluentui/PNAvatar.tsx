
import {
    Avatar,
} from "@fluentui/react-components";

import {
    AccessTimeFilled,
    AccessTimeRegular,

    AddCircleRegular,
    AddCircleFilled,

    AddSquareRegular,
    AddSquareFilled,

    AlbumRegular,
    AlbumFilled,

    AlertBadgeRegular,
    AlertBadgeFilled,

    AlignSpaceEvenlyHorizontalRegular,
    AlignSpaceEvenlyHorizontalFilled,

    AppFolderRegular,
    AppFolderFilled,

    ArrowLeftRegular,
    ArrowLeftFilled,

    ColumnTripleRegular,
    ColumnTripleFilled,

    DataBarVerticalAscendingRegular,
    DataBarVerticalAscendingFilled,

    DeleteRegular,
    DeleteFilled,

    DismissCircleRegular,
    DismissCircleFilled,

    FilterRegular,
    FilterFilled,

    FormNewRegular,
    FormNewFilled,

    GridDotsRegular,
    GridDotsFilled,

    LayoutColumnOneThirdRightHintRegular,
    LayoutColumnOneThirdRightHintFilled,

    OptionsRegular,
    OptionsFilled,

    PersonRegular,
    PersonFilled,

    PersonSupportRegular,
    PersonSupportFilled,

    QuestionCircleRegular,
    QuestionCircleFilled,

    SaveRegular,
    SaveFilled,

    SettingsRegular,
    SettingsFilled,

    WindowShieldRegular,
    WindowShieldFilled,

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
import MenuLink from "../MenuLink";


export const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);
export const Options = bundleIcon(OptionsFilled, OptionsRegular);
export const GridDots = bundleIcon(GridDotsFilled, GridDotsRegular);
export const WindowShield = bundleIcon(WindowShieldFilled, WindowShieldRegular);
export const Person = bundleIcon(PersonFilled, PersonRegular);
export const Settings = bundleIcon(SettingsFilled, SettingsRegular);
export const ArrowLeft = bundleIcon(ArrowLeftFilled, ArrowLeftRegular);


const useClasses = makeStyles({
    container: {
        fontSize: "24px",
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
            fontSize: "24px",
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
                {props.children}
            </div>
        </>
    );
};

export const BundleIconLink = (props) => {
    return <MenuLink to={props.to}><BundleIcon>{props.children}</BundleIcon></MenuLink>
};