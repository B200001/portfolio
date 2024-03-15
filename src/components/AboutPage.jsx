import React from 'react';
import '../styles/aboutpage.scss'; // Import the SCSS file

const AboutPage = () => {
    return (
        <div className='about_main'>
            <div className='about_skills'>
                <h1>Skills</h1>
                <div className='skills_elements'>
                    <h2>Languages</h2>
                    <div className='skill_div'>
                        <div>C++</div>
                        <div>Python</div>
                        <div>JavaScript</div>
                    </div>
                    <h2>Frontend</h2>
                    <div className='skill_div'>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                    </div>

                    <h2>Backend</h2>
                    <div className='skill_div'>
                        <div>Node.js</div>
                        <div>Express</div>
                    </div>

                    <h2>Database</h2>
                    <div className='skill_div'>
                        <div>MongoDB</div>
                        <div>MySQL</div>
                    </div>
                </div>
            </div>
           
            <div className="about_projects">
                <h1>Projects</h1>
                <div className='skills_elements'>
                    <h2>Machine Learning And Deep Learning</h2>
                    <div className='skill_div'>
                        <div>Preterm Birth Prediction</div>
                        <div>Celebrity Image Classifier</div>
                        <div>Realtime Face Detection using VGG16(TensorFlow)</div>
                    </div>
                    <h2>Website Development</h2>
                    <div className='skill_div'>
                        <div>PsocBITM</div>
                        <div>Bank System</div>
                    </div>
                </div>
                {/* Add your project elements here */}
            </div>
        </div>
    );
}

export default AboutPage;