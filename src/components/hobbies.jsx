import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'


function Hobbies() {
    return (
        <>
            <Card border="dark" style={{ width: '40rem' }}>
                <Card.Header>Hobbies</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>Collecting and building Lego's</li>
                            <li>Video Games</li>
                            <li>Weight Lifting</li>
                            <li>Bike Riding</li>
                            <li>Barbecuing</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Hobbies;