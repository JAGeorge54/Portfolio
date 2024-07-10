import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Experience() {
    return (
        <>
            <Card border="dark" style={{ width: '40rem' }}>
                <Card.Header>Experience</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>Army National Guard for six years as a FDC-Operator.</li>
                            <li>One year deployment to Ramadi Iraq.</li>
                            <li>Alcohol DSD(Direct Store Delivery) Driver for two years.</li>
                            <li>Driver and warehouse manager for seven years.</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Experience;