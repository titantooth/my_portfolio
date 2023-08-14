import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard.jsx";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./projects.css";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odio
              sequi numquam autem iure libero facilis! Tempora natus explicabo,
              quod dolores tenetur accusamus illum? Est laboriosam saepe
              expedita unde delectus?
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
