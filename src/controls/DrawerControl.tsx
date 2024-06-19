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

const useStackClassName = makeResetStyles({
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalL,
});

export default ({ title, children, isOpen, setIsOpen, isShowFooter }) => {
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
                        <Button
                            appearance="subtle"
                            aria-label="Close"
                            icon={<ArrowLeftRegular />}
                            onClick={() => setIsOpen(false)}
                        />
                    }
                >
                    {title}
                </DrawerHeaderTitle>
            </DrawerHeader>

            <DrawerBody>{children}</DrawerBody>
            {isShowFooter && <DrawerFooter>Setting</DrawerFooter>}
        </OverlayDrawer>
    );
};