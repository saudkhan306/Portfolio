import About from './About';
import Skills from './Skills';
import Works from './Works';
import Resume from './Resume';
let jsonData = require('../data.json');

function Home() {
    return <>
        <section className="heroSection">
            <div className="container">
                <div className="heroSubSection">
                    <div className="content">
                        <h3 className="helloText">Hello, I'm</h3>
                        <h1 className="mainName">{jsonData.name}</h1>
                        <h4 className="professionText">{jsonData.designation}</h4>
                        <p className="shortText">
                            {jsonData.description.short}
                        </p>
                    </div>
                    <div className="scroller">
                        <span className="mouse"></span>
                    </div>
                </div>
            </div>
        </section>
        <About />
        <Works />
        <Skills />
        <Resume />
    </>
}

export default Home;