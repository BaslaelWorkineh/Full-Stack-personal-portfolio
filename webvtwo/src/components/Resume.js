import React from 'react';

const ResumeSection = () => {
  return (
    <section className="resume-section" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".3s">
              <h2 className="section-title">My Experience</h2>
            </div>

            <div className="resume-widget">
              <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                <div className="time">
                  2024 - Present
                </div>
                <h3 className="resume-title">Co-Founder and CTO of Guzo Travel</h3>
                <div className="institute">
                  Addis Ababa, Ethiopia
                </div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                <div className="time">
                  2024 - Present
                </div>
                <h3 className="resume-title">Intern at Prodigy Info Tech</h3>
                <div className="institute">
                  Parsons, The New School
                </div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">
                  2021 - 2022
                </div>
                <h3 className="resume-title">Data Organizer at Jarso AI</h3>
                <div className="institute">
                  Addis Ababa, Ethiopia
                </div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">
                  2023 - Present
                </div>
                <h3 className="resume-title">Freelancer at Upwork</h3>
                <div className="institute">
                  Addis Ababa, Ethiopia
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".4s">
              <h2 className="section-title">My Education</h2>
            </div>

            <div className="resume-widget">
              <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
                <div className="time">
                  2021 - Present
                </div>
                <h3 className="resume-title">B.Sc. Computer Science</h3>
                <div className="institute">
                  Addis Ababa University
                </div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                <div className="time">
                  2018 - 2021
                </div>
                <h3 className="resume-title">St. Joseph Catholic School Adama</h3>
                <div className="institute">
                  Adama, Ethiopia
                </div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                <div className="time">
                  2023 - Present
                </div>
                <h3 className="resume-title">CS50 Courses</h3>
                <div className="institute">
                  Harvard University
                </div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".8s">
                <div className="time">
                  2022 - Present
                </div>
                <h3 className="resume-title">Multiple Courses on Udemy</h3>
                <div className="institute">
                  Udemy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
