import React from "react";
import { NAVBAR_CONSTANTS } from "./config/navbar.constants";

class Navbar extends React.Component {
    render(): JSX.Element {
        const { navbarText } = NAVBAR_CONSTANTS;
        
        return (
            <div className={'navbar'}>
                <div data-testid='navbar-text' className={'navbar__title'}>{navbarText}</div>
            </div>
        );
    }
}

export default Navbar;