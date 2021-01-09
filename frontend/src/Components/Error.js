import React from 'react';
import error_image from '../img/error-404.webp' 
import Footer from './Footer';
import {Navbar} from './Navbar';
export default function Error() {
    return (
        <div>
        <Navbar/>
            <div className="row d-flex justify-content-center align-content-center">
                <img src={error_image} className="error-image img-fluid"/>
            </div>
        <Footer/>
        </div>
    )
}
