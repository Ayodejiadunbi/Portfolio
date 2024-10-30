import image from "../assets/homeimage.jpg";
import image2 from "../assets/gymimage.jpg";
import image4 from "../assets/Aiimage.jpg";
import image5 from "../assets/analysis.jpg";

const Home = () => {
  return (
    <>
      <div className="container1">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="homeheading">
              <p className="type">Software Development</p>
              <p className="type">Data Science</p>
              <p className="type">Data Analysis</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={image} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>

      <div className="container2">
        <h3 id="aboutme">ABOUT ME</h3>

        <div className="container22">
          <h4>
            Transition from Business Administration to Software Development
          </h4>
          <p>
            {" "}
            After earning my degree in Business Administration, I developed a
            strong interest in technology. To pursue this passion, I embarked on
            a self-learning journey, completing online courses in Node js
            ,Golang,Javascript and Typescript. I enhanced my skills through
            practical projects, attended a coding bootcamp, and gained hands-on
            experience via internships and freelance work. Networking with
            industry professionals and seeking mentorship were key components of
            my transition. My background in business, combined with my technical
            expertise, allows me to create effective software solutions that
            address business needs. I'm excited to continue growing and
            contributing to innovative projects in software development.
          </p>
        </div>
        <div className="container23">
          <h4>My Mission in Tech</h4>
          <p>
            {" "}
            My mission is to harness technology to develop innovative solutions
            that enhance efficiency and user experience. By combining my
            business insights with technical skills, I aim to bridge business
            needs and tech advancements. I am dedicated to continuous learning
            and contributing to impactful, cutting-edge projects that drive
            organizational success.
          </p>
        </div>
        <div className="container24">
          <h4>My Vision in Tech</h4>
          <p>
            {" "}
            My vision is to drive technological innovation, creating solutions
            that transform industries and improve lives. I strive to stay at the
            cutting edge of technology, lead groundbreaking projects, and
            seamlessly integrate tech advancements with business needs..
          </p>
        </div>
      </div>

      <div className="container3">
        <div className="resume">
          <h2 id="RESUME">RESUME</h2>

          <div className="educaf">
            <div className="Education">
              <div className="Educationheading">
                <h3>Education</h3>
              </div>
              <div className="">
                <h5>Master of Bussiness Adminstration</h5>
                <p>University of Hertfordshere,UK</p>
              </div>
              <div className="">
                <h5>Biological Science</h5>
                <p>University of Abuja, Abuja Nigeria</p>
              </div>
              <div className="">
                <h5>West Africa Examination Council</h5>
                <p>Det College,Lagos State, Nigeria</p>
              </div>
              <div className="">
                <h5>First Leaving Certificate</h5>
                <p>Brainfield Nursery and Primary School</p>
              </div>
              <div className="">
                <h4>Data Science</h4>
                <p>Utiva Learning</p>
              </div>
              <div className="">
                <h4>Data Analysics</h4>
                <p>Utiva Learning</p>
              </div>
              <div className="">
                <h4>Software Developer</h4>
                <p>Mariana Consultant</p>
              </div>
              <div className="">
                <h4>Software Developer</h4>
                <p>Utiva Learning</p>
              </div>
              <div className="">
                <h4>Amazon cloud</h4>
                <p>Optimal Training</p>
                <div className="">
                  <h4>AI essencial</h4>
                  <p>ALX Africa</p>
                </div>
              </div>
            </div>
            <div className="Certification">
              <h3>Certifications</h3>
              <ul>
                <li>Web Development</li>
                <h5>TypeScript</h5>
                <p>Learn the fundamentals</p>
                Date of Completion**: [Month Year]
                <h5>JavaScript</h5>
                <p>Basics</p>
                <p>Date of Completion**: [Month Year]</p>
                <p>Interactivity with JavaScript and JQuery</p>
                <p>Data Manipulation in JavaScript</p>
                <h5>React</h5>
                <p>React Basics</p>
                <h5>Node.js</h5>
                <p>Node.js Fundamentals</p>
                <p>Institution**: [Institution Name]</p>
                <h5>Bootstrap</h5>
                <p>Bootstrap Essentials</p>
                <p> Institution: [Institution Name]</p>
                <h5> Python</h5>
                <p>Programming Essentials</p>
                <p>Date of Completion: [Month Year]</p>
                <h5>Data Representation</h5>
                <p>
                  Institution: [Institution Name] Date of Completion: [Month
                  Year]
                </p>
                <h5>Data Analysis</h5>
                <p>
                  Institution**: [Institution Name] Date of Completion**: [Month
                  Year]
                </p>
                <h5>Data Visualization</h5>
                <p>
                  Institution: [Institution Name] Date of Completion: [Month
                  Year]
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container4">
        <div className="container41">
          <ul>
            <li>
              <h4>Soft Skills</h4>
              <p> Critical Thinking</p>
              <p>Creativity</p>
              <p>Attention to detaing</p>
              <p>Communication</p>
              <p>Analytical thinking</p>
              <p>Problem Solving</p>
              <p>Team working</p>
              <p>Collaboration</p>
              <p>Time Management</p>
              <p>Accountability</p>
            </li>
          </ul>
          <div className="">
            <ul>
              <h4>Technical Skill</h4>
              <li>HTML/CSS </li>
              <li>Node JS</li>
              <li>Python</li>
              <li>Goland</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Mongo db</li>
              <li>Postgress Sql</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container5">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="portfolio">
              <h3 id="PORTFOLIO">MY PORTFOLIO</h3>
              <p>Explore my portfolio , where i showcase my coding skills</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card">
              <img src={image2} className="card-img-top" alt="image2" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  A simple website that Doctor and Patient can use communicate.
                </p>
                <a
                  href="https://mellifluous-banoffee-c4090f.netlify.app"
                  className="btn btn-primary"
                >
                  explore more
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card">
              <img src={image2} className="card-img-top" alt="image2" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  A simple gym website using React app and bootsrapt.
                </p>
                <a
                  href="https://gym-site-k3kgx7aq1-ayodeji-adunbis-projects.vercel.app"
                  className="btn btn-primary"
                >
                  explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container6">
        <div className="subcontainer61">
          <h3 id="service">SERVICE I RENDER </h3>
          <p>innovating the Future , one byte at a time</p>
        </div>
        <div className="container62">
          <div className="container63">
            <div className="container6image">
              <img src={image4} className="card-img-top" alt="" />
            </div>
            <div className="container6words">
              <h4>Website Development</h4>
              <p>
                Develpment of responsive websites and Web application using a
                modern front-end and Back-end technology{" "}
              </p>
            </div>
          </div>
          <div className="container63">
            <div className="container66words">
              <h4>AI Solution and implementations</h4>
              <p>
                I work with you to identify the area where AI can bring
                significant effect improvement, and how it can encahnce Customer
                expereince, and optimizing operation,or creating new revenue
              </p>
            </div>
            <div className="container66image">
              <img src={image4} className="card-img-top" alt="" />
            </div>
          </div>
          <div className="conatiner64">
            <div className="containeranalysisimage">
              <img src={image5} className="card-img-top" alt="" />
            </div>
            <div className="containeranalysisword">
              <h4>Data insights and Decision Making</h4>
              <p>
                I tranformed raws data into actionable information,helping you
                mamking informed decisions that drive Bussiness growth and
                <br></br> effeciency.My expertise is Data visualizataion
                ,Statistical analysis and predictive modelling allows you to
                understand your Data<br></br> better and leverage it for
                statstics planning and operational improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
