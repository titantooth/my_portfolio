import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../../assets/img/header-img.svg'
import './banner.css'



const banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Project Manager', 'Financial Advisor', 'Web Developer', 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(200)
        }
    }

    return (
        <section id='home' className="section-hero banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Soroosh`}<br /><span className="wrap rotater"> {text}</span></h1>
                        <p>Project manager holding a M.Sc. in industrial engineering with a burning passion for Finances, HR, IT and the Web, allow me to share some of myself with you!</p>
                        <button onClick={() => console.log('connect')}>Let's Meet<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="banner-img">
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default banner