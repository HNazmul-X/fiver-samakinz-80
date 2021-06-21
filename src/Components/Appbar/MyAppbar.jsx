import { faPaste,  faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MyAppbar = () => {
    const [isSearbarFocus, setIsSearcbarFocus] = useState(false)


    const inputGroupSetBorder = (e) => {
        setIsSearcbarFocus("focused")
        e.stopPropagation()
    }

    window.onclick = () => {
        isSearbarFocus && setIsSearcbarFocus('')
    }

    return (
        <section id="Dashboard-Appbar" className="px-2 px-md-3 px-lg-5">
            <div className="navbar-brand">
                <h3>DashBoard</h3>
            </div>
            <div className="navbar-searchbar">
                <div onClick={inputGroupSetBorder} className={`input-group ${isSearbarFocus}`}>
                    <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faPaste} />
                    </span>
                    <input type="text" className="form-control" placeholder="Paste you url here" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>

            <div className="navbar-content">
                <FontAwesomeIcon className="icon" icon={faSun} />
            </div>
        </section>
    );
};

export default MyAppbar;
