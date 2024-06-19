import React, { useState } from "react";

import { MoreVertical32Regular, Person32Regular } from "@fluentui/react-icons";

import MenuData from '../mockData/menu.json';

import MenuLink from "./MenuLink";

import { BundleIcon, GridDots, Options, PNAvatar, Person, WindowShield } from "./fluentui/PNAvatar";

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
    Switch,
} from "@fluentui/react-components";

import Drawer from "./DrawerControl";
import { CompanyLogo, Container, Content, LogoColumn, ProfileColumn, TopBarContainer } from "../layout/Container";
import { useSession } from "../providers/SessionProvider";





export default (props) => {

    const { setTheme, setLanguage } = useSession();

    const onThemeChanged = (e) => {
        setTheme((e.currentTarget.checked ? "webDarkTheme" : "webLightTheme"));
    };

    console.log("menuData", MenuData);

    return (
        <>
            <TopBarContainer>
                <LogoColumn>
                    <BundleIcon                        >
                        <GridDots onClick={() => props.setIsOpen(!props.isOpen)} className="cursor-pointer" />
                    </BundleIcon>

                    <CompanyLogo size={1.5} />
                </LogoColumn>

                <Field >
                    <Input type="search" placeholder="start typing to search..." />
                </Field>

                <ProfileColumn>

                    <Switch onClick={onThemeChanged} />

                    <BundleIcon>
                        <Person />
                    </BundleIcon>
                    <BundleIcon>
                        <Options />
                    </BundleIcon>

                    <MenuLink to="/profile">
                        <PNAvatar name="Rupesh Telang" shape="square" />
                    </MenuLink>
                </ProfileColumn>
            </TopBarContainer>

            <Drawer
                isShowFooter={false}
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