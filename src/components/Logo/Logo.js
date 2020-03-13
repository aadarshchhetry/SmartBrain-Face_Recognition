import React from 'react';
import './Logo.css'
import Tilt from 'react-tilt'
 


const Logo = () => {
    return (
        <nav style= {{display: 'flex'}}>
            <Tilt className="Tilt" options={{ max : 120 }} >
                <div ><img alt='' src = "https://www.designfreelogoonline.com/wp-content/uploads/2016/12/000782-link-3D-logo-design-online-free-3d-logo-maker-01.png"/></div>
            </Tilt>
            

        </nav>
    );
}

export default Logo;