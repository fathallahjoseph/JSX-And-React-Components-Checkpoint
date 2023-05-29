import React from 'react';  /* this to import react */
import pic from "./PHOTOS/joseph.png"  /* import my photo img from Photos folder */
/* my function to return my photo */
function PorfilePhoto() {
    return (
        <img id='jo' src={pic} alt='pic' />
    );
    
}
export default PorfilePhoto;