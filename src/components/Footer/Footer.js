import './Footer.css'
import Logo from '../Logo/Logo.js'

function Footer() {
  
return (
    <>
        <div className="footer">
            <div className='footer-links'>
                <Logo />
                <div className='footer-quick-link'>
                <h2>Quick Link</h2>
                <ul>
                    <li><a href='https://www.google.com'>Home</a></li>
                    <li><a href='https://www.google.com'>Auctions</a></li>
                    <li><a href='https://www.google.com'>Contact Us</a></li>
                    <li><a href='https://www.google.com'>Terms and conditions</a></li>
                    <li><a href='https://www.google.com'>How to sell</a></li>
                    <li><a href='https://www.google.com'>How to buy</a></li>
                    <li><a href='https://www.google.com'>Upcoming Events</a></li>
                </ul>
                </div>
                <div className='footer-company'>
                <h2>Company</h2>
                    <ul>
                        <li>
                            <a href='https://www.google.com' >
                                
                                Facebook
                            </a>
                        </li>
                        <li><a href='https://www.google.com'>
                            
                            Instagram
                        </a></li>
                        <li><a href='https://www.google.com'>
                            Linkedin
                        </a></li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h2>Contact Information</h2>
                    <p><b>Address:</b> 25141 Gudrun Plains </p>
                    <p><b>Phone:</b> +18722224781 </p>
                </div>
            </div>
            <div className='footer-stamp'>
                <p>Copyright © 2024 All rights reserved</p>     
            </div>
        </div>
    </>
  );
}

export default Footer;