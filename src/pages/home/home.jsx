import BioCard from '../../components/bioCard'
import YoutubeEmbed from '../../components/youTubeEmbed';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div className='content'>
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <BioCard />
                    <YoutubeEmbed embedId='ty_mlNuzll8?si=IdfUortm0KZ90j_v'/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 200,
                }}>
                    <Card
                        bg='secondary'
                        key='secondary'
                        text='white'
                        style={{ width: '18rem'}}
                        className="mb-2"
                        >
                        <Card.Header>Hobbies</Card.Header>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item variant='dark'>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card
                        bg='secondary'
                        key='secondary'
                        text='white'
                        style={{ width: '18rem' }}
                        className="mb-2"
                        >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Home;