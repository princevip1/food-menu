import React from 'react';
import bgImage from "../../../image/bg.png"

const PhoneNumber = () => {
    const backgroungImage={
        backgroundImage: `url(${bgImage})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "100% 100%",
        // padding:"380px 20px"
        height: "100%",

  /* Center and scale the image nicely */
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
         
    }


    return (
        <div style={backgroungImage}>
            <p>this is phone number</p>
        </div>
    );
};

export default PhoneNumber;