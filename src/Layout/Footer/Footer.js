import React from 'react';
import './Footer.css';
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaPhoneAlt} from 'react-icons/fa';
import {MdLocationPin} from 'react-icons/md';
import {HiMail} from 'react-icons/hi';
import footer_logo from '../../Assests/footer_logo.png'
import footer_img from '../../Assests/footer_img.png'
import footer_img2 from '../../Assests/footer_img2.png'

const Footer = () => {
    let date=new Date().getFullYear();
    return (<>   <footer>
            <div className="Footer_main">
                <div className="Footer_main_sub Footer_main_sub_1">
                    <img src={footer_logo} alt={footer_logo} />
                   
                   
                </div>
                <div className="Footer_main_sub Footer_main_sub_2">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Cases</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="Footer_main_sub Footer_main_sub_3">
                    <address>
                        <MdLocationPin/> &nbsp;
                    908 New Hampshire Avenue #100, Washington, 20037, United States
                    <br />  
                    <br />  
                    <FaPhoneAlt/> &nbsp;
                    +1-202-555-0195
                    <br />
                    <br />
                    <HiMail/> &nbsp;
                    Contact@agence.co

                    </address>
                </div>
                <div className="Footer_main_sub Footer_main_sub_4">
                <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Term of Service</a></li>
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Contact</a></li>
                       
                    </ul>
                </div>
            </div>
            <hr />
            <div className="Footer_copyright">
                <p>© {date} copyright all right reserved.</p>
                <div className="Footer_social">
                    <a href="#">
                        <FaFacebook/>
                    </a>
                    <a href="#">
                        <FaTwitter/>
                    </a>
                    <a href="#">
                        <FaLinkedin/>
                    </a>
                    <a href="#">
                        <FaInstagram/>
                    </a>
                </div>

            </div>
            {/* <div className="Footer_img">
                    <img src={footer_img} alt={footer_img} />
                    <img src={footer_img2} alt={footer_img2} />

                    </div> */}
        </footer>
    </>)
}
export default Footer;