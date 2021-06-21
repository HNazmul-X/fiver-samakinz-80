import React from "react";
import styled from "styled-components";

const InfoCard = ({ info, index }) => {
    
    const {background, title, description} = info;
    console.log(description)

    

    const InfoCarddiv = styled.div`
        .area {
            background: var(${background});
            padding: 20px;
            h2 {
            }
            h3 {
                color: inherit;
                font-weight: 450;
                font-size: 22px;
            }
        }
    `;

    return (
        <InfoCarddiv className={`infocard___${index}`}>
            <div className="area">
                <h2>{index}. {title} </h2>
                <h3>{description}</h3>
            </div>
        </InfoCarddiv>
    );
};

export default InfoCard;
