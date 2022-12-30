import { useState } from "react";
import { data } from "./data";


function Slades (){
    const [onlineStore, setOnlineStore] = useState(0);
    const {image} = data [onlineStore]

    return(
        <div>
            <img src={image} alt="store"/>
        </div>
    )
}
export default Slades;

