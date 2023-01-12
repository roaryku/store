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
                <img className='image' src={imageProps[onlineStore]} alt="beaty" width="200px" height="300"/>
            </div>
            <div className="container cta">
                <button className='btn' onClick={prevBtn}>Previous</button>
                <button className='btn' onClick={nextBtn}>Next</button>
            </div>
        </div>
        )
    }
export default Slides;