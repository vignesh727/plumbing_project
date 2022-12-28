import './header.css';
import logo from "./images/logo.png";

// offcanvas menu item images
import profile from "./images/user.png";
import inbox from "./images/chat.png";
import setting from "./images/settings.png";
import booking from "./images/booking.png";
import coupons from "./images/coupon.png";
import about_us from "./images/about_us.png";
import terms from "./images/terms_and_conditions.png";
import privacy_policy from "./images/privacy_policy.png";
import cancellation_policy from "./images/cancellation_policy.png";
import refund_policy from "./images/refund_policy.png";
import help from "./images/help_support.png";
import sign_in from "./images/sign_in.png";
import { NavLink, useNavigate } from 'react-router-dom';


function Header(){
    
    const nav = useNavigate();

    return(
        <div>
        <header>
        <div className="header">
    <div className="header_content">
        <div className="header_content_div">
            <NavLink to="/"><img className="company_logo" src={logo} alt="Company-logo"></img></NavLink>
        </div>
        <div className="d_flex">

        {/* <div className="header_content_div">
            <ul className="header_menu">
                <li className="header_list"><a className="header_link" href="_self">Home</a></li>
                <li className="header_list"><a className="header_link" href="self">Categories</a></li>
                <li className="header_list"><a className="header_link" href="self">Services</a></li>
            </ul>
        </div> */}

        {/* <div className="header_content_div">
            <form>
                <input id="search_bar" type="text" placeholder="Search for services"></input>
                <button className="search_button"><i id="search_icon" class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div> */}
{/* 
        <div className="header_content_div">
            <div className="header_border_left">

            </div>
        </div> */}
        
        <div className="header_content_div">
            <div className="service_man">
                {/* <a className="service_man__register" href="self">Become a Service man</a> */}
                <button className="service_man__register">Become a Service man</button>

            </div>
        </div>

        {/* <div className="header_content_div">
            <div className="header_border_right">

            </div>
        </div> */}

        {/* <div className="header_content_div">
            <ul className="header_unorder">

                <li className="header_list"><a href="self"><i id="header_icon" class="fa-solid fa-bell"></i></a></li>
                <li className="header_list"><a href="self"><i id="header_icon" class="fa-solid fa-crown"></i></a></li>
                <li className="header_list"><a href="self"><i id="header_icon" class="fa-solid fa-cart-plus"></i></a></li> 
            
            </ul> 
        </div> */}
        <div className="header_content_div">
            <button type="button" className="sign_in__buttton" onClick={()=>nav('/sign_in')} ><i id="sign_icon" class="fa-solid fa-arrow-right-to-bracket"></i>Sign In</button>
            <button id="off_canvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    {/* <li className="header_list"> */}
                        <i id="menu_space" class="fa-solid fa-list-ul"></i>
                        Menu
                    {/* </li> */}
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        {/* <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                        <h4>Menu</h4>
                    </div>
                    <div class="offcanvas-body">
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={profile} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Profile</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={inbox} alt="settings"></img>

                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Inbox</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={setting} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Settings</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={booking} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Bookings</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={coupons} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>coupons</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={about_us} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>About us</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={terms} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Terms & conditions</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={privacy_policy} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Privacy Policy</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={cancellation_policy} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>cancellation Policy</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={refund_policy} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Refund Policy</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={help} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Help & Support</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={sign_in} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>sign in</h6>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
        </div>
        </div>
    </div>


        </div>
    </header>
    </div>
    );
}

export default Header;