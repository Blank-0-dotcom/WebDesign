import React from 'react'
import "./Footer.css";

function Footer() {
    const topFunction = e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behaviour: 'smooth' })
    }

    return (
        <div className="footer">
            <span onClick={topFunction} className="back">Back to top</span>
            <div className="footer_details">
                <div className="footer_option">
                    <span className="footer_optionLineOne">Get to Know Us</span>
                    <a href="">Careers</a>
                    <a href="">Blog</a>
                    <a href="">About Amazon</a>
                    <a href="">Investor Relations</a>
                    <a href="">Amazon Devices</a>
                    <a href="">Amazon Tours</a>
                </div>
                <div className="space"></div>

                <div className="footer_option">
                    <span className="footer_optionLineOne">Make Money with Us</span>
                    <a href="">Sell products on Amazon</a>
                    <a href="">Sell apps on Amazon</a>
                    <a href="">Become an Affiliate</a>
                    <a href="">Advertise Your Products</a>
                    <a href="">Self-Publish with Us</a>
                    <a href="">Host an Amazon Hub</a>
                    <a href="">See More Make Money with Us</a>
                </div>
                <div className="space"></div>

                <div className="footer_option">
                    <span className="footer_optionLineOne">Amazon Payment Products</span>
                    <a href="">Amazon Business Card</a>
                    <a href="">Shop with Points</a>
                    <a href="">Reload Your Balance</a>
                    <a href="">Amazon Currency converter</a>
                </div>
                <div className="space"></div>


                <div className="footer_option">
                    <span className="footer_optionLineOne">Let Us Help You</span>
                    <a href="">Amazon and COVID-19</a>
                    <a href="">Your Account</a>
                    <a href="">Your Orders</a>
                    <a href="">Shipping Rates & Policies</a>
                    <a href="">Amazon Prime</a>
                    <a href="">Returns & Replacements</a>
                    <a href="">Manage Your Content and Devices</a>
                    <a href="">Amazon Assistent</a>
                    <a href="">Help</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
