import React from 'react';
import Chart from '../chart/Chart';
import "./footer.css"
import Logo from '../../assets/images/Logo-Brand-You-New.png'

var today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
					<Chart />
            <img src={Logo} alt="logo" width="5%"/>
            <br/>
            <br/>
            <br/>
						<span>Copyright &copy; Dashboard - Brand You {date}</span>
              <footer class="footer-container">
                  <p class="footer-links">
                    <a href="/">Home</a> &nbsp;
                    <a href="https://support.microsoft.com/es-es">Online Support</a>
                  <p><a href="mailto:support@company.com">support@brand-you.com</a></p>	&nbsp;
                  </p>
                    <p>Paraná 3745, Martínez, Buenos Aires, Argentina</p>
                    <p> Phone: (011) 4733-1111 </p>
                  <div class="social_box">
                      <ul>
                          <li><i class="fab fa-facebook-f facebook"></i></li>
                          <li><i class="fab fa-twitter twitter"></i></li>
                          <li><i class="fab fa-instagram instagram"></i></li>
                          <li><i class="fab fa-linkedin-in linkedin"></i></li>
                          <li><i class="fab fa-youtube youtube"></i></li>
                          <div class="text">FOLLOW</div>
                      </ul>
                  </div>
            </footer>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;