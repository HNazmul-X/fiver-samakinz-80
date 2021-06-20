import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const MediaObject = ({ data }) => {
    console.log(data)
    const { subheadline, title, background, icon } = data;

    const MediaObjectDiv = styled.div`
        width: 100%;
        display: inline-flex;
        align-items: center;
        padding: 10px 5px 10px 10px;
        background: #38383875;
        border-radius: 10px;
        .icon {
            background: ${background};
            border-radius: 50%;
            margin-right: 10px;
            font-size: 20px;
            min-width: 40px;
            min-height: 40px;
            text-align: center;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .media-text {
            h6 {
                color: dimgray;
            }
            h4 {
                color: white;
                span.t {
                    color: orange;
                }
            }
        }
    `;

    return (
        <MediaObjectDiv className="media-object_IDKD">
            <div className="icon"><FontAwesomeIcon icon={icon}/> </div>
            <div className="media-text">
                <h6 className="small-header mb-0">{subheadline && subheadline}</h6>
                <h4 className="small-header mb-1">{title && title}</h4>
            </div>
        </MediaObjectDiv>
    );
};

export default MediaObject;
