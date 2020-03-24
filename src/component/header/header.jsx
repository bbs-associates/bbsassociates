import React from "react";
import './header.css'
import hoverLogo from '../../functions/hoverLogo.js'



const Header = () => (

    <div id='header' className="header">
        <div className='row'>
            <div className='col-lg-offset-3 col-md-offset-3 col-lg-6 col-md-6 col-sm-5'>
                <object id="logo" data={require('../../media/bbs-associates-logo-no-back.svg')} alt='BBS Associates'  type="image/svg+xml" onMouseEnter={() => { hoverLogo(); }}></object>
                {/* <img id='logo' className='logo' alt='BBS Associates' src={require('../../media/bbs-associates-logo-no-back.svg')} onMouseEnter={() => { hoverLogo(); }}></img> */}
                <div className="card text-center">
                Accountants and Taxation Consultants
                </div>
                        
            </div>
        </div>
    </div>
            
)

export default Header