import * as React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
    Tooltip,
} from "@fluentui/react-components";
import {
    CalendarMonthFilled,
    CalendarMonthRegular,
    bundleIcon,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const path = "/";


const items = ["Home", "Pages", "Products", "Customer Loyalty Management"]
const breadcrumbs = [
    { title: "Home", link: "/", isCurrent: false },
    { title: "Pages", link: "/pages", isCurrent: false },
    { title: "Products", link: "/pages/products", isCurrent: false },
    { title: "Customer Loyalty Management", link: "/pages/products/loyalty", isCurrent: true },
]

export default () => {
    return (
        <Breadcrumb >
            {breadcrumbs.map((b, i) => {
                return <>
                    <BreadcrumbDivider />
                    <BreadcrumbItem>
                        <Tooltip withArrow={true} content={b.title} relationship="label">
                            <BreadcrumbButton href={b.link} current={b.isCurrent}>{b.title}</BreadcrumbButton>
                        </Tooltip>
                    </BreadcrumbItem>
                </>
            })}
        </Breadcrumb>
    );
};