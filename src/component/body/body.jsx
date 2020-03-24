import React from "react";
import './body.css'



const Body = () => (

    <div id='body' className="body">
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className="card">
                    <div className="card-header">
                    Contact us
                    </div>
                    <ul>
                        <li>54 Abbey St, Bangor, BT20 4JB</li>
                        <li>028 9146 6555</li>
                        <li>bbs.tax@btconnect.com</li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className="card">
                    <div className="card-header">
                    COVID-19 support
                    </div>

                    <ul>
                        <li><a href='https://www.gov.uk/government/publications/guidance-to-employers-and-businesses-about-covid-19/guidance-for-employers-and-businesses-on-coronavirus-covid-19'>Guidance for employers and businesses on coronavirus (COVID-19)</a></li>
                        <li><a href='https://www.gov.uk/government/publications/guidance-to-employers-and-businesses-about-covid-19/covid-19-support-for-businesses'>Support for businesses</a></li>

                    </ul>

                </div>
            </div>
        </div>
    </div>
            
)

export default Body