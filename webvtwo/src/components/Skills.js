import React from 'react';
import figmaIcon from './assets/img/icons/figma.svg';
import sketchIcon from './assets/img/icons/sketch.svg';
import reactIcon from './assets/img/icons/react.svg';
import jsIcon from './assets/img/icons/js.svg';
import blenderIcon from './assets/img/icons/blender.svg';
import cplusplusIcon from './assets/img/icons/cplusplus.svg';
import csharpIcon from './assets/img/icons/csharp.svg';
import css3Icon from './assets/img/icons/css3.svg';
import dockerIcon from './assets/img/icons/docker.svg';
import expressIcon from './assets/img/icons/express.svg';
import gitIcon from './assets/img/icons/git.svg';
import githubIcon from './assets/img/icons/github.svg';
import html5Icon from './assets/img/icons/html5.svg';
import javaIcon from './assets/img/icons/java.svg';
import mongodbIcon from './assets/img/icons/mongodb.svg';
import photonengineIcon from './assets/img/icons/photonengine.svg';
import photoshopIcon from './assets/img/icons/photoshop.svg';
import postgresqlIcon from './assets/img/icons/postgresql.svg';
import pythonIcon from './assets/img/icons/python.svg';
import unityIcon from './assets/img/icons/unity.svg';
import nextIcon from './assets/img/icons/next.svg';
import reduxIcon from './assets/img/icons/redux.svg';
import nodeIcon from './assets/img/icons/nodejs.svg'
import tailwindIcon from './assets/img/icons/tailwind.svg'
import typescriptIcon from './assets/img/icons/typescript.svg'



const SkillsSection = () => {
  // Array of skill objects
  const skills = [
    
    { icon: tailwindIcon, percentage: 82, name: 'TailwindCSS' },
    { icon: typescriptIcon, percentage: 82, name: 'TypeScript' },
    { icon: html5Icon, percentage: 82, name: 'HTML5' },
    { icon: css3Icon, percentage: 82, name: 'CSS3' },
    { icon: jsIcon, percentage: 93, name: 'JavaScript' },
    { icon: reactIcon, percentage: 89, name: 'React' },
    { icon: reduxIcon, percentage: 82, name: 'Redux' },
    { icon: nextIcon, percentage: 82, name: 'NextJS' },
    { icon: nodeIcon, percentage: 82, name: 'Nodejs' },
    { icon: expressIcon, percentage: 82, name: 'Express' },
    { icon: gitIcon, percentage: 82, name: 'Git' },
    { icon: githubIcon, percentage: 82, name: 'GitHub' },
    { icon: figmaIcon, percentage: 92, name: 'Figma' },
    { icon: sketchIcon, percentage: 80, name: 'Sketch' },
    { icon: photoshopIcon, percentage: 82, name: 'Photoshop' },
    { icon: blenderIcon, percentage: 82, name: 'Blender' },
    { icon: unityIcon, percentage: 82, name: 'Unity' },
    { icon: photonengineIcon, percentage: 82, name: 'Photon Engine' },
    { icon: pythonIcon, percentage: 82, name: 'Python' },
    { icon: javaIcon, percentage: 82, name: 'Java' },
    { icon: cplusplusIcon, percentage: 82, name: 'C++' },
    { icon: csharpIcon, percentage: 82, name: 'C#' },
    { icon: mongodbIcon, percentage: 82, name: 'MongoDB' },
    { icon: postgresqlIcon, percentage: 82, name: 'PostgreSQL' },
    { icon: dockerIcon, percentage: 82, name: 'Docker' },
];


  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
              <p className=" wow fadeInUp" data-wow-delay=".4s">These are my current skills, though the percentages are subjective estimates.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              {/* Mapping over the skills array to render each skill item */}
              {skills.map((skill, index) => (
                <div key={index} className="skill-item wow fadeInUp" data-wow-delay={`.${index + 3}s`}>
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src={skill.icon} alt="" style={{width:100}}/>
                    </div>
                    <div className="number">{skill.percentage}%</div>
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
