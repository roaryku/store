import { useState } from "react";



function Slides({imageProps}) {
    const [onlineStore, setOnlineStore] = useState(0);
    
    const nextBtn = () => {
        setOnlineStore((onlineStore => {
            onlineStore ++;
            if(onlineStore > imageProps.length - 1){
                onlineStore = 0
            }
            return onlineStore
        }))
    }

    const prevBtn = () => {
        setOnlineStore((onlineStore => {
            onlineStore --;
            if(onlineStore < 0){
                return imageProps.length -1
            }
            return onlineStore
        }))
    }

    return(
        <div>
            <div>
                <img src={imageProps[onlineStore]} alt="beaty" width="200px" height="300"/>
            </div>
            <div className="container">
                <button onClick={prevBtn}>Previous</button>
                <button onClick={nextBtn}>Next</button>
            </div>
        </div>
        )
    }
export default Slides;