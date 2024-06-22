import React, { useState } from "react";

import { MoreVertical32Regular, Person32Regular } from "@fluentui/react-icons";

import MenuData from '../mockData/menu.json';

import MenuLink from "./MenuLink";

import { BundleIcon, DarkMode, GridDots, Options, PNAvatar, Person, WindowShield } from "./fluentui/PNAvatar";

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
    ToggleButton,

} from "@fluentui/react-components";

import Drawer from "./DrawerControl";
import { CompanyLogo, Container, Content, LogoColumn, ProfileColumn, TopBarContainer } from "../layout/Container";
import { useSession } from "../providers/SessionProvider";





export default (props) => {
    const { theme, setTheme, setLanguage } = useSession();

    const [themeChecked, setThemeChecked] = useState(false);



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

                    <ToggleButton appearance="transparent" icon={<DarkMode />}
                        onClick={() => {
                            setThemeChecked(!themeChecked);
                            setTheme((!themeChecked ? "teamsDarkTheme" : "teamsLightTheme"));
                        }}
                    ></ToggleButton>

                    <BundleIcon>
                        <Options />
                    </BundleIcon>

                    <MenuLink to="/profile">
                        <PNAvatar name="Rupesh Telang" shape="square" />

                    </MenuLink>
                </ProfileColumn>
            </TopBarContainer>
            <Container>

            </Container>


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