import React from 'react'
import "./Journey.css";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function Journey() {
    return (
        <section className="journey">

            <h2 className="journey-title">The Professional Journey</h2>
            <p className="journey-sub">
                A timeline of my education and early career in software development
            </p>

            <div className="timeline">

                {/* HSC */}

                <div className="timeline-row">

                    <div className="timeline-left">
                        <span>2023 – 2025</span>
                        <p>Started HSC</p>
                    </div>

                    <div className="timeline-dot">
                        <FaGraduationCap />
                    </div>

                    <div className="timeline-card">
                        <h3>2023 – 2025</h3>
                        <h2>Higher Secondary Certificate (HSC)</h2>

                        <p>
                            Completed Higher Secondary Education under the Maharashtra
                            State Board, building a strong academic foundation in
                            science and analytical thinking.
                        </p>
                    </div>

                </div>


                {/* BTECH */}

                <div className="timeline-row">

                    <div className="timeline-left">
                        <span>2025 – 2029</span>
                        <p>BTech</p>
                    </div>

                    <div className="timeline-dot">
                        <FaLaptopCode />
                    </div>

                    <div className="timeline-card">
                        <h3>2025 – 2029 (Present)</h3>
                        <h2>BTech – Computer Science (AI / ML)</h2>

                        <p>
                            Currently pursuing BTech in Computer Science with
                            specialization in Artificial Intelligence and Machine Learning.
                            Focused on software development, data structures, and scalable systems.
                        </p>
                    </div>

                </div>


                {/* INTERNSHIP */}

                <div className="timeline-row">

                    <div className="timeline-left">
                        <span>2025</span>
                    </div>

                    <div className="timeline-dot">
                        <FaBriefcase />
                    </div>

                    <div className="timeline-card">

                        <h3>2025</h3>
                        <h2>Frontend & Python Developer Intern — Code Alpha</h2>

                        <div className="tech-tags">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>Python</span>
                            <span>Automation</span>
                        </div>

                        <p>
                            Worked on frontend interfaces using modern JavaScript frameworks
                            and contributed Python-based backend scripts for automation
                            and data processing.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Journey;