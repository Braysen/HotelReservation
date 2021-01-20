import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <footer className="footer section bd-container">
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <a href="# " className="footer__logo">Luxury</a>
                    <span className="footer__description">Hotel</span>
                    <div>
                        <a href="# " className="footer__social"><FacebookIcon/></a>
                        <a href="# " className="footer__social"><GitHubIcon/></a>
                        <a href="# " className="footer__social"><LinkedInIcon/></a>
                    </div>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Services</h3>
                    <ul>
                        <li><a href="# " className="footer__link">Delivery</a></li>
                        <li><a href="# " className="footer__link">Pricing</a></li>
                        <li><a href="# " className="footer__link">Fast food</a></li>
                        <li><a href="# " className="footer__link">Reserve your spot</a></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li><a href="# " className="footer__link">Event</a></li>
                        <li><a href="#Contact" className="footer__link">Contact us</a></li>
                        <li><a href="# " className="footer__link">Privacy policy</a></li>
                        <li><a href="# " className="footer__link">Terms of services</a></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Adress</h3>
                    <ul>
                        <li>Máncora - Piura</li>
                        <li>Jr Union #999</li>
                        <li>999 - 888 - 777</li>
                        <li>luxuryresort@gmail.com</li>
                    </ul>
                </div>
            </div>
            <p className="footer__copy">&#169; 2021 JBraToc. All right reserved.</p>
        </footer>
    )
}
