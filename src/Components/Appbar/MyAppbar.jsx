import { faBars, faPaste, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MyAppbar = ({ isMblSitebarOpen, setIsMblSitebarOpen, theme, setTheme }) => {
    const [isSearbarFocus, setIsSearcbarFocus] = useState(false);

    const inputGroupSetBorder = (e) => {
        setIsSearcbarFocus("focused");
        e.stopPropagation();
    };

    window.onclick = () => {
        isSearbarFocus && setIsSearcbarFocus("");
    };

    const themeChanging = () => {
        setTheme( theme === "black-theme"? "light-theme" : "black-theme")
    }
    return (
        <section id="Dashboard-Appbar" className="px-2 px-md-3 px-lg-5">
            <div className="navbar-brand">
                <h3>
                    <span className="logo"> DashBoard</span>{" "}
                    <FontAwesomeIcon
                        onClick={(e) => {
                            setIsMblSitebarOpen("sitebar-opened");
                            e.stopPropagation();
                        }}
                        className="bar-icon"
                        icon={faBars}
                    />
                </h3>
            </div>
            <div className="navbar-searchbar">
                <div onClick={inputGroupSetBorder} className={`input-group ${isSearbarFocus}`}>
                    <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faPaste} />
                    </span>
                    <input type="text" className="form-control" placeholder="Paste you url here" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>

            <div onClick={themeChanging} className="navbar-content">
                <FontAwesomeIcon className="icon" icon={faSun} />
            </div>
        </section>
    );
};

export default MyAppbar;
