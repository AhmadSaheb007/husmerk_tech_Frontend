import React from 'react';
import '/src/components/Shared/ProjectSection.css'
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {

    function scrollDown(event){
        document.getElementById('sectionTwo').scrollIntoView()
    };

    return (
        <div>
            <SectionTitle sectionTitle = "Projects" />
            <div className="container">
            <div className="scroll-bg py-3 text-center">
                <div className="scroll-div px-2">
                    <div className="scroll-object">
                        <div className="row">
                            <div className="col-lg-3 py-2">
                                <ProjectCard/>
                            </div>
                            <div className="col-lg-3 py-2">
                                <ProjectCard/>
                            </div>
                            <div className="col-lg-3 py-2">
                                <ProjectCard/>
                            </div>
                            <div className="col-lg-3 py-2" id = 'sectionTwo'>
                                <ProjectCard/>
                            </div>
                            <div className="col-lg-3 py-2">
                                <ProjectCard/>
                            </div>


                            



                            
                        </div>    .
                    </div>
                </div>
                <button className='py-2 px-5 bg-black text-light rounded-2 scroll-bg-btn' onClick={scrollDown}>See More</button>
            </div>
            </div>
        </div>
    );
};

export default ProjectSection;