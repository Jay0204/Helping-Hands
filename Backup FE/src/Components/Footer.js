import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="container-fluid" id="footer">
            {/* <div className="row"> */}
            <center>
                <div className="col-12 col-md-4 offset-md-2" style={{marginLeft:"8%", color:"white"}}>

<a href="https://goo.gl/maps/MJpLMNUteYpBvdjy8" target="_blank" rel="noreferrer noopener"><i class="fas fa-map-marker-alt fa-2x "></i></a><div className="text"><p>Dhirubhai Ambani Institute of Communication and Technology</p></div>
<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jay.cr7.prajapati@gmail.com" target="_blank" rel="noreferrer noopener"> <i className="fa fa-envelope fa-2x info" target="_blank"></i></a><div className="text"><p><br />jay.cr7.prajapati@gmail.com</p></div>
<a href="tel:+918511603999" target="_blank" rel="noreferrer noopener"> <i class="fa fa-phone fa-2x info" aria-hidden="true"></i></a><div className="text"><p>+91-8511603999</p></div>
</div>

            {/* </div> */}
            </center>
            {/* <p className="col-12 copyright">Copyright © 2021</p> */}
        </footer>
    )
}

export default Footer;