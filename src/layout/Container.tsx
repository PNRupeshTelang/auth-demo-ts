import { makeStyles, tokens, } from "@fluentui/react-components"

import { NavLink } from "react-router-dom"


export const ScreenFull = (props) =>
    <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%"
    }}>{props.children}</div>
//tw.div`h-screen w-screen bg-gray-100 flex`;

export const Container = (props) =>
    <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
    }}
        {...props.styles}>
        {props.children}
    </div >;

export const Content = (props) => <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",


}}>
    {props.children}
</div>
// tw.div`basis-full bg-white`;

export const LogoColumn = (props) => <div style={{ display: "flex", alignItems: "center", alignContent: "center" }}  >{props.children}</div>

export const ProfileColumn = (props) => <div style={{ display: "flex", alignItems: "center", alignContent: "center" }}>{props.children}</div>;

export const MenuLink = (props) => <NavLink to={props.to} >{props.children}</NavLink>;

export const CompanyLogo = (props) => <MenuLink to={props.to}><img src={props.src} alt={props.alt}></img></MenuLink>;


// const Container = tw.div`flex justify-between items-center shadow `;
// const LogoColumn = tw.div`flex items-center gap-4 mx-5 my-2 py-1`;
// const ProfileColumn = tw.div`flex items-center  gap-2 mx-5 py-1`;
// const MenuIconContainer = tw.div`cursor-pointer`;

// <Container>
//     <LogoColumn>
//         <MenuIconContainer>
//             <MoreVertical32Regular
//                 onClick={() => props.setIsOpen(!props.isOpen)}
//                 ascent={tw`text-primary-500`}
//                 className="cursor-pointer"
//             />
//         </MenuIconContainer>

//         <CompanyLogo to="" />

//         <Field>
//             <Input type="search" placeholder="start typing to search..." />
//         </Field>
//     </LogoColumn>

//     <ProfileColumn>
//         <MenuLink to="/profile">Profile</MenuLink>
//         <Person32Regular />
//     </ProfileColumn>
// </Container>