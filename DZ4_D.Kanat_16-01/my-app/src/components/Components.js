import React from "react";


function Portfolio({works}) {
    return (

    <ul>
        {
            works.length > 0 ? works.map((work, key) => <li key={key}>{work}</li>) : <li>...</li>
        }
    </ul>
    );
}

export default Portfolio;