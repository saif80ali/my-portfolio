import React from "react";
import gmail from "../assets/Icons/gmail.png";
import telephone from "../assets/Icons/phone-receiver.png";
import instagram from "../assets/Icons/instagram.png"
import linkedin from "../assets/Icons/linkedin.png"
import facebook from "../assets/Icons/facebook.png"
import twitter from "../assets/Icons/twitter.png"
import github from "../assets/Icons/github-sign.png"

export default function ContactMe() {
    return (
        <div id="contact" className="mt-4">
            <h5 className="text-center">Connect with me</h5>
            <div className="contact-me">
                <div className="social-media">
                    <a href="https://www.instagram.com/saifali_fias/" target="_blank" rel="noopener noreferrer"><img className="social-media-icons" src={instagram} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img className="social-media-icons" src={facebook} alt="facebook" /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img className="social-media-icons invert-1" src={twitter} alt="twitter" /></a>
                    <a href="https://www.linkedin.com/in/saif-ali-5ab917171/" target="_blank" rel="noopener noreferrer"><img className="social-media-icons" src={linkedin} alt="Linkedin" /></a>
                    <a href="https://github.com/saif80ali" target="_blank" rel="noopener noreferrer"><img className="social-media-icons invert-1" src={github} alt="github" /></a>
                </div>
                <div className="social-media mt-4">
                    <a className="fw-bold" href="tel:8013051576"><img className="social-media-icons invert-1" src={telephone} alt="telephone" /><span>+91 8013051576</span></a>
                    <a className="fw-bold" href="mailto:saifalifias@gmail.com"><img className="social-media-icons" src={gmail} alt="gmail" /><span>saifalifias@gmail.com</span></a>
                </div>
            </div>
        </div>
    )
}