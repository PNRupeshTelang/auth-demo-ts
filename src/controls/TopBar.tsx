import React, { useState } from "react";

import { MoreVertical32Regular, Person32Regular } from "@fluentui/react-icons";

import MenuData from '../mockData/menu.json';

import MenuLink from "./MenuLink";

import { BundleIcon, PNAvatar } from "./fluentui/PNAvatar";

import {
    tokens,
    Field,
    Input,
    Label,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    makeStyles,
    Menu,
    Badge,
} from "@fluentui/react-components";

import {
    bundleIcon,
    AccessTimeFilled, AccessTimeRegular,
    PersonFilled, PersonRegular,
} from "@fluentui/react-icons";

import Drawer from "./DrawerControl";
import { CompanyLogo, Container, Content, LogoColumn, ProfileColumn } from "../layout/Container";

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);
const Person = bundleIcon(PersonFilled, PersonRegular);


export default (props) => {

    console.log("menuData", MenuData);

    return (
        <>
            <Container>
                <LogoColumn>
                    <div>
                        <MoreVertical32Regular
                            onClick={() => props.setIsOpen(!props.isOpen)}
                            ascent={"blue"}
                            className="cursor-pointer"
                        />
                    </div>

                    <CompanyLogo to="/" />

                    <Field>
                        <Input type="search" placeholder="start typing to search..." />
                    </Field>
                </LogoColumn>


                <ProfileColumn>
                    <MenuLink to="/profile">
                        <PNAvatar name="Rupesh Telang" shape="square" />
                    </MenuLink>
                    <BundleIcon bundledIcon={<Person />} />

                </ProfileColumn>
            </Container>

            <Drawer
                isShowFooter={true}
                isOpen={props.isOpen}
                setIsOpen={props.setIsOpen}
                title={<Label size="large">One App</Label>}
            >
                <hr />
                {MenuData.map((obj) => {
                    return (
                        <>
                            <Label size="large">{obj.moduleName}</Label>

                            {obj.Menus.map((menuItems) => {
                                if (menuItems.Child) {
                                    return (
                                        <MenuList>
                                            <Menu>
                                                <MenuTrigger>
                                                    <MenuLink>{menuItems.Text}</MenuLink>
                                                </MenuTrigger>
                                                <MenuPopover>
                                                    <MenuList>
                                                        {menuItems.Child.map((obj) => {
                                                            return (
                                                                <MenuLink to={menuItems.Link}>
                                                                    {obj.Text}
                                                                </MenuLink>
                                                            );
                                                        })}
                                                    </MenuList>
                                                </MenuPopover>
                                            </Menu>
                                        </MenuList>
                                    );
                                }

                                return (
                                    <MenuLink
                                        to={menuItems.Link}
                                        onClick={() => props.setIsOpen((prev) => !prev)}
                                    >
                                        {menuItems.Text}
                                    </MenuLink>
                                );
                            })}
                        </>
                    );
                })}
            </Drawer>
        </>
    );
};