import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import TopInfoBox from './TopInfoBoxes/TopInfoBoxes'
import Logo from '../assets/images/Logo-Brand-You-New.png'



function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800"><img src={Logo} alt="logo" width="5%"/>  App Dashboard - Brand You</h1>
						 
					</div>
				
					{/*<!-- Content Row Products->*/}
					
					<TopInfoBox />

					<ContentRowCenter />
					
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;