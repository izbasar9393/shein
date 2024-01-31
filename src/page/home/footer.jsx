import '../../css/home.css'
import { Link } from 'react-router-dom';
import Discovery from "../../img/footer/Discovery.svg"
const Footer = () => {
    return(
<div>
    <footer>
        <div className="info_support_customer">
            <div className="info_support_customer_one">
                <div className="info one">
                    <h3>
                        COMPANY INFO
                    </h3>
                    <Link to = "#">About SHEIN</Link>
                    <Link to = "#">Sustainability</Link>
                    <Link to = "#">Fashion Blogger</Link>
                    <Link to = "#">Supply Chain</Link>
                    <Link to = "#">Careers</Link>
                    <Link to = "#">Student Discount</Link>
                    <Link to = "#">#SHEIN101</Link>
                </div>
                <div className="support one">
                    <h3>
                        HELP & SUPPORT
                    </h3>
                    <Link to = "#">Shipping Info</Link>
                    <Link to = "#">Returns</Link>
                    <Link to = "#">Refund</Link>
                    <Link to = "#">How To Order</Link>
                    <Link to = "#">How To Track</Link>
                    <Link to = "#">Size Guide</Link>
                    <Link to = "#">SHEIN VIP</Link>
                    <Link to = "#">Sell On Shein</Link>
                </div>
                <div className="customer one">
                    <h3>
                        CUSTOMER CARE
                    </h3>
                    <Link to = "#">Contact Us</Link>
                    <Link to = "#">Payment & Tax</Link>
                    <Link to = "#">Bonus Point</Link>
                </div>
            </div>
           <div className="info_support_customer_two">
                <p>©2009-2023 SHEIN All Rights Reserved</p>
                <nav className="two">
                    <div>
                        <Link to = "#">
                            Privacy Center
                            
                        </Link>
                        <span>|</span>
                        <Link to = "#">
                            Privacy & Cookie Policy
                            
                        </Link>
                        <span>|</span>
                        <Link to = "#">
                            Do Not Sell My Personal Information
                            
                        </Link>
                        <span>|</span>
                    </div>
                   <div className="two_two">
                    <Link to = "#">
                        Terms & Conditions
                        
                    </Link>
                    <span>|</span>
                    <Link to = "#">
                        IP Notice
                        
                    </Link>
                    <span>|</span>
                    <Link to = "#">
                        Accessibility
                        
                    </Link>
                    <span>|</span>
                    <Link to = "#">
                        Imprint
                        
                    </Link>
                    <span>|</span>
                    <Link to = "#">
                        Ad Choice
                        
                    </Link>
                    <span>|</span>
                    <Link to = "#" className="locasia">
                        <img src={Discovery} alt="locosia"/>
                        Kazakhstan
                   </Link>
                   </div>
                   
                </nav>
           </div>
        </div>
        <div className="contact">
            <div className="messendjer_app">
                <div className="messendjer">
                    <h4>
                        FIND US ON
                    </h4>
                   
                </div>
                <div className="app">

                </div>
            </div>
        </div>
        <div className="footer_input">
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <p></p>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>

        </div>

    </footer>
</div>
        
    )
}


export default Footer;
