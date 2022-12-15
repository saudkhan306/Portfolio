import jsonData from "../data.json"

function Skills() {
    return <>
        <section className="skillSection" id="skills">
            <div className="container _1200">
                <div className="skillHeadingContainer d-flex justify-content-between align-itmes-start">
                    <h1 className="bigHeading">My Skills</h1>
                    <div className="content">
                        <p>
                            I have worked as a front-end developer at Indian Mistry. That was a great experience to work under such a big
                            organization though I have learned many things from this internship and also the superiors were kinda helping nature.
                        </p>
                        <p>
                            I have worked as a front-end developer at Indian Mistry. That was a great experience to work under such a big
                            organization though I have learned many things from this internship and also the superiors were kinda helping nature.
                        </p>
                    </div>
                </div>
            </div>
            <div className="skillCardSec horizontalScroll_parent">
                <div className="skillCardCont">
                    {
                        jsonData.skills.map((value, index) => (
                            <div key={index} className="skillCard" style={value.style}>
                                <span className="transparent__logo" style={{ "backgroundImage": `url(${value.bg_img})` }}></span>
                                <div className="top_block mb-5">
                                    <div className="__icon">
                                        <img src={value.img} alt={value.name} />
                                    </div>
                                    <h3>{value.name}</h3>
                                    <p>
                                        {value.description}
                                    </p>
                                    <a href={value.link} target="_blank">know more</a>
                                </div>
                                <div className="percentage_bar_container">
                                    <div className="percentage_bar">
                                        <p>My Experties</p>
                                        <div className="percentage_strip" style={{ "width": `${value.percent}%` }}></div>
                                        <div className="perntange_amount" style={{ "--left_percentage": `${value.percent}%` }}>{value.percent}%</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
}

export default Skills;