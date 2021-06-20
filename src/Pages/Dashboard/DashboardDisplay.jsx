import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MediaObject from "../../Components/MediaObject/MediaObjec";
import { ThemeBG } from "../../styles/ThemeComponents";
import { MediaObjectData } from "./MediaObjectdata";

const DashboardDisplay = () => {
    return (
        <main id="dashboard_Display_page">
            <h2 className="mb-3">Ticki Earning Manager</h2>
            <ThemeBG className="mb-3 d-flex justify-content-between px-3 ">
                <h5>Please input your address above</h5>
                <h5>Buy TIKI</h5>
            </ThemeBG>

            <div className="row">
                {MediaObjectData.map((card) => {
                    return (
                        <div className="col-md-6 mb-3 col-lg-3">
                            <MediaObject bgColor="red" data={card} />
                        </div>
                    );
                })}
            </div>

            <ThemeBG className="text-center mb-3">
                {" "}
                <FontAwesomeIcon icon={faDatabase} /> Click Here To Reinvest Your Dividends And Earn Even More BNB Over Time{" "}
            </ThemeBG>

            <div className="dark-highlight bnb-currency-board p-4">
                <img src="https://tikitoken.app/static/media/bnb.162aaf57.png" className="logo" alt="TiKI" />
                <h1 className="m-4 text-center">Total BNB Paid Out To $TIKI Holders</h1>
                <div className="currency">
                    <h1>
                        <span className="text-success">7,452 </span> <span style={{ color: "orange" }}>BNB</span>
                    </h1>
                    <h1 className="text-success"> = $2,492,918</h1>
                </div>
            </div>
        </main>
    );
};

export default DashboardDisplay;
