import React from 'react';
import Chart from './Chart';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
					<Chart />
						<span>Copyright &copy; Dashboard 2021</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;