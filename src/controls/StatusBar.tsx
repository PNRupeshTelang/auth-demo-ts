import React, { useState } from "react";

import { CompanyLogo, StatusBarContainer } from "../layout/Container";

export default (props) => {

    return (
        <StatusBarContainer>
            <CompanyLogo />
            &copy; Panther Nails Technologies Private Limited
        </StatusBarContainer>
    );
};