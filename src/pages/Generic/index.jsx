import React from "react";
import { useLocation} from "react-router-dom";
const Generic = () => {
    const location = useLocation ()
    return(
        <div>Generic {location.pathname}</div>
    )
}
export default Generic