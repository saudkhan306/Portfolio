let jsonData = require('../data.json');

function About(props) {
    let is_page = props?.is_page ?? false;
    return <>
        <section className="aboutSection" id="about">
            <div className="container">
                <div className="aboutSubSection">
                    <div className="profileImage">
                        <img src="./assets/images/profileImage.png" alt="" />
                    </div>
                    <div className="aboutContent">
                        <span>About Me</span>
                        <h2>{jsonData.name}</h2>
                        <h3>{jsonData.designation} with <strong>{jsonData.years_of_experience}+</strong> years Exp.</h3>
                        <div className="content">
                            <p>
                                I am a 25 years old motivated Full Stack Developer focused on user interface and user experience design. I am working at an agency called TPC. and studying during my free time User Experience Design at IU International Hochschule.
                            </p>
                            <p>It is my passion to create Front-end interfaces.</p>
                            <a href="#" className="knowMoreButton">Know More...</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroller">
                <span className="circle"></span>
            </div>
        </section>
    </>
}

export default About;