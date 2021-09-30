import React from 'react';
import Chart from './chart/Chart';

var today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
					<Chart />
						<span>Copyright &copy; Dashboard - Brand You {date}</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;