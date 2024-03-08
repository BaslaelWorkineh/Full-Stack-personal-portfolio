import React from 'react';

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
              <p className=" wow fadeInUp" data-wow-delay=".4s">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={require('./assets/img/icons/figma.svg').default} alt="" />
                  </div>
                  <div className="number">92%</div>
                </div>
                <p>Figma</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={require('./assets/img/icons/sketch.svg').default} alt="" />
                  </div>
                  <div className="number">80%</div>
                </div>
                <p>Sketch</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={require('./assets/img/icons/xd.svg').default} alt="" />
                  </div>
                  <div className="number">85%</div>
                </div>
                <p>XD</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={require('./assets/img/icons/wp.svg').default} alt="" />
                  </div>
                  <div className="number">99%</div>
                </div>
                <p>WordPess</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={require('./assets/img/icons/react.svg').default} alt="" />
                  </div>
                  <div className="number">89%</div>
                </div>
                <p>React</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={require('./assets/img/icons/js.svg').default} alt="" />
                  </div>
                  <div className="number">93%</div>
                </div>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
