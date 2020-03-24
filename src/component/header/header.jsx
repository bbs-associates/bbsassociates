import React from "react";
import './header.css'



const Header = () => (

    <div id='header' className="header">
        <div className='row'>
            <div className='col-lg-offset-3 col-md-offset-3 col-lg-6 col-md-6 col-sm-5'>
                <img id="logo" src={require('../../media/bbs-associates-logo-no-back.svg')} alt='BBS Associates'  type="image/svg+xml"></img>
                {/* <img id='logo' className='logo' alt='BBS Associates' src={require('../../media/bbs-associates-logo-no-back.svg')} onMouseEnter={() => { hoverLogo(); }}></img> */}
                <div className="card text-center">
                Accountants and Taxation Consultants
                </div>
                        
            </div>
        </div>
    </div>
            
)

export default Header