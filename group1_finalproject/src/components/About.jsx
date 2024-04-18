import React from "react";
import myImage from "../images/myImage.png";
import "../css/About.css";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        { id: "JavaScript_skill", content: "JavaScript", porcentage: "80%", value: "80" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        { id: "ReactJS_skill", content: "ReactJS", porcentage: "85%", value: "85" },
        { id: "Python_skill", content: "Python", porcentage: "70%", value: "70" },
        { id: "VanillaJS_skill", content: "VanillaJS", porcentage: "60%", value: "60" },
        { id: "Wordpress_skill", content: "Wordpress", porcentage: "90%", value: "90" }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5 about-img">
                        <div className="about-img">
                          <img className="img-fluid rounded b-shadow-a" src={myImage} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map(skill => (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">{skill.porcentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      <p className="lead">
                        <strong>Pritesh Patel</strong>
                        <br />
                        Pritesh29071998@gmail.com
                        <br />
                        +1 548 577 5071
                        <br />
                        227 Grulke Street, Kitchener, ON
                      </p>
                      <p className="lead">Objective:</p>
                      <p>
                        I am a computer engineer with over 2 years of experience
                        working as a SEO executive. Currently, I am in Canada and
                        seeking opportunities to further excel in my career.
                      </p>
                      <p className="lead">Work Experience:</p>
                      <ul>
                        <li>SEO Trainee at Aussizz Immigration (March 2020 - July 2020)</li>
                        <li>SEO Executive at Apex Web Zone (Dec 2020 - Nov 2021)</li>
                        <li>SEO Executive at Technocrackers (Dec 2021 - Sept 2022)</li>
                        <li>Bliss Web Solution Pvt. Ltd. (Oct 2022 - Nov 2022)</li>
                      </ul>
                      <p className="lead">Job Role:</p>
                      <ul>
                        <li>Handled more than 30 live projects simultaneously, managing onsite changes and team tasks.</li>
                        <li>Created progress reports for clients on a daily basis.</li>
                        <li>Participated in project strategy development.</li>
                        <li>Collaborated with various organizational teams including developers, QA, and designers.</li>
                      </ul>
                      <p className="lead">Key Strengths:</p>
                      <ul>
                        <li>Onpage SEO</li>
                        <li>Offpage SEO</li>
                        <li>Keyword research</li>
                        <li>Google Analytics</li>
                        <li>Google Search Console</li>
                        <li>Proficient in tools like Semrush, Screaming Frog, Ahrefs</li>
                        <li>Proficient in Microsoft Excel</li>
                        <li>Attended Gotch SEO’s certificate program</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
