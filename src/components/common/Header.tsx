import React from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom"
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const Header: React.FC = () => {

    return (
        <Navbar light={true} expand="xl" className="bg-white d-flex justify-content-between align-content-center border-bottom">
            <NavbarBrand href="/">
                <FormattedMessage id="header.title" />
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink to="/" exact className="nav-link">
                        <FormattedMessage id="header.home" />
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;