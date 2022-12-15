function Footer() {
    return <>
        <footer>
            <div className="container _850">
                <div className="subFooter">
                    <h1 className="bigHeading">
                        <span className="light">Let's create something</span>
                        together, Drop me a line!
                    </h1>
                    <button type="button" className="getInTouch">Get in Touch</button>
                    <div className="footerSocialMedia">
                        <div className="headingText">
                            Find me on
                        </div>
                        <ul className="social">
                            <li>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <div className="tooltipData">
                                    <a href="#">https://www.linkedin.com/undefinedPerson</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-codepen"></i>
                                </a>
                                <div className="tooltipData">
                                    <a href="#">https://codepen.io/undefinedPerson</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                                <div className="tooltipData">
                                    <a href="#">https://github.com/</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <div className="tooltipData">
                                    <a href="#">https://web.whatsapp.com/undefinedPerson</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="far fa-comment-alt"></i>
                                </a>
                                <div className="tooltipData">
                                    <a href="#">Contact Form</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;