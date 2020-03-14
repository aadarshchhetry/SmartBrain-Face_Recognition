import React from 'react';

const ImageLinkForm = ({OnInputChange, OnSubmitButton}) => {
    return (
        <nav>
            
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <form className="form justify-content-center" >
                    <label><h3>Please paste image link here</h3></label>
                    <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            id="imagelinkform"
                            placeholder="paste link here"
                            onChange={OnInputChange}>
                    </input>

                    <button type="button"
                            className="btn btn-primary mb-2" 
                            onClick={OnSubmitButton}>Detect</button>
                </form>
            </div>
        </nav>
    );
}

export default ImageLinkForm;