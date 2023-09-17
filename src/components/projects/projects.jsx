import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard.jsx";
// import projImg1 from "../../assets/img/project-img1.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import chitgar from '../../assets/img/chitgar.png'
import feasibility from '../../assets/img/Feasibility.png'
import webdev from '../../assets/img/webdev.png'
import research from '../../assets/img/research.png'
import katalom from '../../assets/img/katalom.png'
import "./projects.css";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const projects = () => {
  const projects = [
    {
      title: "Chitgar Floating Pontoons",
      description: "Managed Project",
      imgUrl: chitgar,
    },
    {
      title: "Feasibility Studies",
      description: "Financial Advisor",
      imgUrl: feasibility,
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: webdev,
    },
    {
      title: "Research & Publications",
      description: "Academic Research",
      imgUrl: research,
    },
    {
      title: "Katalom Hotel",
      description: "Managed Project",
      imgUrl: katalom,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            My experience encompasses a wide range of projects, including construction management, web development, and conducting financial feasibility studies. I've demonstrated adaptability by meeting timelines and budgets in construction, delivering user-friendly websites, and providing strategic insights for informed financial decisions.
            </p>

            <Row>
              {projects.map((project, index) => {
                return (
                  <>
                    <ProjectCard key={index} {...project} />
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="image right"
      />
    </section>
  );
};

export default projects;
