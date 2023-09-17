import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';
import './skills.css'


const skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2 className='skill-header'>
                                Skills
                            </h2>
                            <p>
                            project manager with financial and economic analysis skills, coupled with web development and design expertise. This versatile skill set positions me as an adept leader in diverse project environments.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skills-slider' >
                                <div className='item'>
                                    <img src={meter1} alt="image" />
                                    <h5>Financial Analysis</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="image" />
                                    <h5>Project Management</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="image" />
                                    <h5>Communication skills</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="image" />
                                    <h5>Problem-Solving</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="image" />
                                    <h5>Leadership</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="image" />
                                    <h5>Adaptability</h5>
                                </div>
                            </Carousel>



                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="" />
        </section>
    )

}

export default skills