import React from "react";
import { useLocation } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { LinkStyled, NavList } from "./Navbar.styled";

function Navbar() {
    const location = useLocation();
    return (
        <div>
            <NavList>
                {MenuItems.map((menu) => {
                    return (
                        <li key={menu.path}>
                            <LinkStyled
                                to={menu.path}
                                className={
                                    menu.path === location.pathname
                                        ? "active"
                                        : ""
                                }
                            >
                                {menu.name}
                            </LinkStyled>
                        </li>
                    );
                })}
            </NavList>
        </div>
    );
}

export default Navbar;
