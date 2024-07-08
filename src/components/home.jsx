import BioCard from '../components/bioCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <>
        <Container>
            <Row className="justify-content-center">
                <Col sm="auto">
                <BioCard />
                </Col>
                <Col md={8} >
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/ty_mlNuzll8?si=UF64PMYEl8TCKHc_" title="YouTube video" allowfullscreen></iframe>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home