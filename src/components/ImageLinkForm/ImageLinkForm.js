import React from 'react';

const ImageLinkForm = () => {
    return (
        <nav>
            <p>Please paste the image link here</p>
            <form class="form col-5" >
                <input type="text" class="form-control mb-2 mr-sm-2" id="imagelinkform" placeholder="paste link here"></input>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
        </nav>
    );
}

export default ImageLinkForm;