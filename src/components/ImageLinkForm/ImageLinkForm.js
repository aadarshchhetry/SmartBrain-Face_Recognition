import React from 'react';

const ImageLinkForm = () => {
    return (
        <nav>
            
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <form class="form justify-content-center" >
                    <label><h3>Please paste image link here</h3></label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="imagelinkform" placeholder="paste link here"></input>
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </nav>
    );
}

export default ImageLinkForm;