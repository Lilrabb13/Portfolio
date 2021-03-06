import React from "react"
import "./Contact.css"
import Footer from "../../Components/Footer/Footer"

function Contact(){
    return(
        <section id="contact" className="background-color">
            <div className="title-contact">
                <h2>
                    Contact
                </h2>
            </div>
            <div className="Contact-description">
                <h2>
                    OK, LET’S CREATE SOMETHING GREAT
                </h2>
            </div>
            <div className="Contact-description">
                If you like my work and have some cool project to work on, just send <br/>
                me direct message or contact me through social sites listed below.
            </div>
            <div className="social">
                <div className="social-link-Container">
                    <a target="/blank" href="https://www.facebook.com/?lang=en" className="social-link Facebook"></a>
                    <p>
                        Facebook
                    </p>
                </div>
                <div className="social-link-Container">
                <a target="/blank" href="https://co.linkedin.com/?lang=en" className="social-link LinkedIn"></a>
                <p>
                    LinkedIn
                </p>
                </div>
                <div className="social-link-Container">
                    <a target="/blank" href="https://twitter.com/?lang=en" className="social-link Twitter"></a>
                    <p>
                        Twitter
                    </p>
                </div>
                <div  className="social-link-Container">
                    <a target="/blank" href="https://github.com" className="social-link GitHub"></a>
                    <p>
                        GitHub
                    </p>
                </div>
            </div>
            <div className="SendMessege">
                Send me a message
            </div>
            <div className="firstAndSecondname">
                <div>
                    <p>
                        First name
                    </p>
                    <input className="placeholderFirst" type="text" placeholder="First name"/>
                </div>
                <div>
                    <p>
                        Last name
                    </p>
                    <input className="placeholderSecond" type="text" placeholder="Last name"/>
                </div>
            </div>
            <div className="Email">
                <p>
                    Email Addres
                </p>
                <input className="placeholderEmail" type="text" placeholder="Email addres"/>
            </div>
            <div className="Message">
                <p>
                    Message
                </p>
                <input className="placeholderMessage" type="text" placeholder="Write here your message"/>
            </div>
            <div  className="Sendbutton">
                <button>
                    Send
                </button>
            </div>
            <Footer />
        </section>
    )
}

export default Contact