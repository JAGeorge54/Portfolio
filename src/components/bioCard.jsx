import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import jessePic from '../assets/jessePic.jpg'

function BioCard() {
    return (
        <div className='biocard'>
            <div style={{
                padding: '10px'
            }}
            >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jessePic} />
                    <Card.Body>
                        <Card.Title>Jesse George</Card.Title>
                        <Card.Text>
                        Highly motivated and results-driven professional seeking a career change to web development, prioritizing a better worklife balance.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default BioCard;