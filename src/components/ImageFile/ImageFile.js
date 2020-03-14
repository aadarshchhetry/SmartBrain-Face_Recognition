import React from 'react';
import './ImageFile.css'

const ImageFile = ({imageURL, box }) => {
    return (
        <div className="center ma">
            <div className='absolute mt2'>
                <img alt='' id='imagesize' src={imageURL}/>
                <div className="facedetect" style={{top: box.p2, right: box.p3, bottom: box.p4, left: box.p1}}/>
            </div>
        </div>
    );
}

export default ImageFile;