import React, { useRef, useState } from 'react';
import ReactToPrint, { useReactToPrint } from "react-to-print";
import styles from './styles.css'
import Html2Pdf from "js-html2pdf";

export default function Generate() {

    const [name, setname] = useState('Himanshu Yadav');
    const [courseName, setCourseName] = useState('Data science');
    const [duration, setDuration] = useState('3');
    const [session, setSession] = useState('January 2024 to March 2024');
    const [percentage, setPercentage] = useState('78');
    const [grade, setGrade] = useState('A+');
    const [dateOfIssue, setDateOfIssue] = useState('7-15-18');



    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        print: async (printIframe) => {
            const document = printIframe.contentDocument;
            if (document) {
                const html = document.getElementsByClassName("certificate")[0];
                const options = {
                    margin: 0,
                    filename: `${name}-certificate.pdf`,
                    jdPDF: { unit: "mm", format: "a4", orientation: "portrait" }
                };
                const exporter = new Html2Pdf(html, options);
                await exporter.getPdf(options);
            }
        },
    });


    return (

        <div className="App">

            <div className="certificate" id="certificate" ref={componentRef}>
                <div className="header">
                    <img src="assets/logo_bg.png" alt="Kumkum Training Centre" className="logo" />
                    <div className="title">
                        CERTIFICATE <br />
                        OF COMPLETION</div>


                    <img src="assets/medal.png" alt="Kumkum Training Centre" className="logo" />

                </div>

                <p>The certificate is presented to</p>

                <h1 className='title'>{name}</h1>

                <div className="content">
                    For successful completion of Course <strong>{courseName}</strong> from our study center KUMKUM TRAINING CENTRE (NAWADA THANA, ARA, BHOJPUR, BIHAR) of  duration <strong>{duration} months</strong> session {session} and has procured {percentage}% marks Grade {grade}
                </div>
                <div className="footer">
                    <p>Date of Issue: {new Date(dateOfIssue).toLocaleDateString()}</p>
                    <p>Director, Kumkum Training Centre</p>
                </div>
            </div>

            <div className="leftDiv">
                <h3>Certificate Generator</h3>
                <form className="form">
                    <div className='rowBetween'>
                        <label>Name: </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className='rowBetween'>

                        <label>Course Name: </label>
                        <input
                            type="text"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                    </div>
                    <div className='rowBetween'>

                        <label>Duration: </label>
                        <input
                            type="text"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <div className='rowBetween'>

                        <label>Session: </label>
                        <input
                            type="text"
                            value={session}
                            onChange={(e) => setSession(e.target.value)}
                        />
                    </div>
                    <div className='rowBetween'>

                        <label>Percentage: </label>
                        <input
                            type="text"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                        />
                    </div>
                    <div className='rowBetween'>

                        <label>Grade: </label>
                        <input
                            type="text"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                        />
                    </div>
                    <div className='rowBetween'>
                        <label>Date of Issue: </label>
                        <input
                            type="date"
                            value={dateOfIssue}
                            onChange={(e) => setDateOfIssue(e.target.value)}
                        />
                    </div>

                    {/* <button onClick={handlePrint}>submit</button> */}

                </form>
                <div style={{ marginTop: "20px" }}>
                    <ReactToPrint
                        trigger={() => <button>Print this out!</button>}
                        content={() => componentRef.current}
                        print={async (printIframe) => {
                            const document = printIframe.contentDocument;
                            if (document) {
                                const html = document.getElementsByClassName("certificate")[0];
                                const options = {
                                    margin: 0,
                                    filename: `${name}-certificate.pdf`,
                                    jdPDF: { unit: "mm", format: "b1", orientation: "landscape" }
                                };
                                const exporter = new Html2Pdf(html, options);
                                await exporter.getPdf(options);
                            }
                        }}
                    />
                </div>

            </div>



        </div>
    )
}
