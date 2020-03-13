import React from 'react';
import './ImageFile.css'

const ImageFile = ({imageURL}) => {
    return (
        <nav>
            <img className= "sizeofimg" alt='' src={imageURL}/>

        </nav>
    );
}

export default ImageFile;