import "./landing.css"
import logo from "../assets/logo.png"
export default function Landing(){
    return(
        <>
            <div className="navbar">
                <img className="logo" src={logo}/>
                <div className="navbar-links">
                <a className="about-us">About Us</a>
                <a className="contact-us">Contact Us</a>
                <button className="sign-up">Sign Up Now</button>
            </div>
            </div>
            <div className="first-page">
            <div className="main-content">
                Real-life scenarios for real world success
            </div>
            <button className="sign-up-content">Sign Up now</button>
            <div className="first-animation">
                <div className="rect-anim-1">
                    <div className="red-ball"></div>
                    <div className="grey-ball"></div>
                    <div className="grey-rect"></div>
                </div>
                <div className="rect-anim-2">
                <div className="red-ball"></div>
                    <div className="grey-ball"></div>
                    <div className="grey-rect"></div>
                </div>
                <div className="rect-anim-3"></div>
                <div className="circle-anim">
                
                <div className="circle-bottom"></div>
                </div>
            </div>
            </div>
        </>
    )
}