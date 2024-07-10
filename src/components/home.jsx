import './home.css'
import BioCard from '../components/bioCard';
import Hobbies from '../components/hobbies';
import Experience from '../components/experience';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <>
        <Container>
            <Row className="justify-content-center">
                <Col md={3}sm="auto">
                <BioCard />
                </Col>
                <Col md={4} className='video1'>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/ty_mlNuzll8?si=UF64PMYEl8TCKHc_" title="YouTube video" allowfullscreen></iframe>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Hobbies />
                </Col>
                <Col>
                    <Experience />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home