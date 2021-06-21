import { faBars, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Sitebar = ({ isMblSitebarOpen, setIsMblSitebarOpen }) => {
    window.onclick = () => {
        if(isMblSitebarOpen){
            setIsMblSitebarOpen("")
        }
    }

    return (
        <section id="Dashboard-sitebar" className={isMblSitebarOpen}>
            <ul className="p-0">
                <li>
                    <NavLink activeClassName="sitebar-nav-active" className="sitebar-nav" exact to="/">
                        <FontAwesomeIcon className="icon" icon={faHome} /> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="sitebar-nav-active" className="sitebar-nav" exact to="/track">
                        <FontAwesomeIcon className="icon" icon={faBars} /> Tracking
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="sitebar-nav-active" className="sitebar-nav" exact to="/info">
                        <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                        Information
                    </NavLink>
                </li>
            </ul>
        </section>
    );
};

export default Sitebar;
