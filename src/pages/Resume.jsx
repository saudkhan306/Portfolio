import { useEffect, useState } from 'react';
import resume_txt from './../resume_data.txt'

function Resume() {

    let [resume_dats, setResumeData] = useState('')

    useEffect(() => {
        fetch(resume_txt)
            .then(r => r.text())
            .then(text => {
                setResumeData(text)
            })
    }, [])

    return <>
        <section className="editorSectionContainer">
            <div className="container">
                <div className="editorSection">
                    <div className="tabContainer">
                        <div className="left-block d-flex align-items-center">
                            <div className="tabPoints">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="tabs active"><span>my_history.js</span></div>
                            <div className="tabs" id="myResume"><span>my_history.pdf</span></div>
                        </div>
                        <div className="right-block">
                            <button className="downloadButton">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path
                                            d="M12.806,8.7,8,13.509,3.194,8.7l.884-.884,3.3,3.3V0h1.25V11.116l3.3-3.3ZM16,14.75H0V16H16Zm0,0"
                                            fill="#141414" />
                                    </svg>
                                </span>
                                <span>My Resume</span>
                            </button>
                        </div>
                    </div>
                    <div className="myResumeContainer">
                    </div>
                    <div className="editorContainer">
                        <div id="editor">
                            {resume_dats}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Resume;