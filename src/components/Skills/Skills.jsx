import "./Skills.css";
import { SiExpress, SiDocker, SiCplusplus, SiMongodb, SiPostgresql } from "react-icons/si";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaDatabase, FaNodeJs, FaGoogle
} from "react-icons/fa";

import {
    SiTailwindcss, SiPostman
} from "react-icons/si";

import {
    VscVscode
} from "react-icons/vsc";

import {
    FaPython
} from "react-icons/fa";

function Skills() {
    return (
        <section className="arsenal" id="skills">

            <h2 className="arsenal-title">Technical Arsenal</h2>

            <div className="arsenal-grid">

                {/* Frontend */}
                <div className="arsenal-card">
                    <h3>Frontend</h3>

                    <div className="skill">
                        <FaHtml5 className="icon html" />
                        <span>HTML</span>
                    </div>

                    <div className="skill">
                        <FaCss3Alt className="icon css" />
                        <span>CSS</span>
                    </div>

                    <div className="skill">
                        <FaJs className="icon js" />
                        <span>JavaScript</span>
                    </div>

                    <div className="skill">
                        <FaReact className="icon react" />
                        <span>React</span>
                    </div>

                    <div className="skill">
                        <SiTailwindcss className="icon tailwind" />
                        <span>Tailwind CSS</span>
                    </div>

                </div>


                {/* Programming */}
                <div className="arsenal-card">

                    <h3>Programming</h3>

                    <div className="skill">
                        <FaPython className="icon python" />
                        <span>Python</span>
                    </div>



                    <div className="skill">
                        <SiCplusplus className="icon cpp" />
                        <span>C++</span>
                    </div>



                    <div className="skill">
                        <span className="text-icon">DSA</span>
                        <span>DSA</span>
                    </div>



                </div>


                {/* Tools */}
                <div className="arsenal-card">

                    <h3>Tools & API</h3>

                    <div className="skill">
                        <FaGitAlt className="icon git" />
                        <span>Git</span>
                    </div>

                    <div className="skill">
                        <FaGithub className="icon github" />
                        <span>GitHub</span>
                    </div>

                    <div className="skill">
                        <VscVscode className="icon vscode" />
                        <span>VS Code</span>
                    </div>






                    <div className="skill">
                        <SiDocker className="icon docker" />
                        <span>Docker</span>
                    </div>


                </div>
                {/* Backend */}
                <div className="arsenal-card">

                    <h3>Backend</h3>

                    <div className="skill">
                        <FaNodeJs className="icon node" />
                        <span>Node.js</span>
                    </div>

                    <div className="skill">
                        <SiExpress className="icon express" />
                        <span>Express.js</span>
                    </div>

                    <div className="skill">
                        <span className="text-icon">API</span>
                        <span>FastAPI</span>
                    </div>

                </div>

                {/* Database */}
                <div className="arsenal-card">

                    <h3>Database</h3>

                    <div className="skill">
                        <FaDatabase className="icon sql" />
                        <span>SQL</span>
                    </div>

                    <div className="skill">
                        <SiPostgresql className="icon postgresql" />
                        <span>PostgreSQL</span>
                    </div>

                    <div className="skill">
                        <SiMongodb className="icon mongodb" />
                        <span>MongoDB</span>
                    </div>



                </div>

            </div>

        </section>
    );
}

export default Skills;
