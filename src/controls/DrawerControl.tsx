import React from "react";

import { useState } from "react";

import {
    DrawerBody,
    DrawerHeader,
    DrawerHeaderTitle,
    OverlayDrawer,
    Button,
    Field,
    Input,
    makeResetStyles,
    tokens,
    DrawerFooter,
} from "@fluentui/react-components";
import { ArrowLeftRegular } from "@fluentui/react-icons";
import { ArrowLeft, BundleIcon, BundleIconLink, Settings } from "./fluentui/PNAvatar";
import { CompanyLogo } from "../layout/Container";

const useStackClassName = makeResetStyles({
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalL,
});

export default ({ title, children, isOpen, setIsOpen, isShowFooter }) => {

    const closeDrawer = () => setIsOpen(false)


    return (
        <OverlayDrawer
            open={isOpen}
            size="small"
            accessKey="alt-m"
            modalType="modal"
            position="start"
            onOpenChange={(_, { open }) => setIsOpen(open)}
        >
            <DrawerHeader>
                <DrawerHeaderTitle
                    action={
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignContent: "center",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}>
                            <BundleIconLink to="dashboard">
                                <Settings />
                            </BundleIconLink>


                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={
                                    <BundleIcon>
                                        <ArrowLeft />
                                    </BundleIcon>
                                }
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                    }
                >
                    <CompanyLogo size={1.5} to="/" />
                </DrawerHeaderTitle>
            </DrawerHeader>

            <DrawerBody>{children}</DrawerBody>
            {isShowFooter && <DrawerFooter>
                <CompanyLogo size={2} />
            </DrawerFooter>}
        </OverlayDrawer>
    );
};