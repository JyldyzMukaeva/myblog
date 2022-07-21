import React from "react";
import {tags} from "../constants";

const margin = {
    marginRight: "5px"
}

const Tags = () => {

    const tagsArray = tags.map(item => (

                <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom"
                    style={margin}>
                    {item}
                </span>)
    );
    return(
        /* Labels / index */
    <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
            <h4>Tags</h4>
        </div>
        <div className="w3-container w3-white">
            <p>
               {tagsArray}
            </p>
        </div>
    </div>
    /* END Introduction Menu */
    )
}
export default Tags;