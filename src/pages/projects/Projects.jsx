import Card from 'react-bootstrap/Card';
import './projects.css'
import Pacman from '../../assets/PacMan1.png'
import Oneeye from '../../assets/oneeyenew.png'
import Mapnew from '../../assets/mapnew.jpg'

function Projects() {
    return (
        <div className='container'>
        <div className='cards' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexWrap: 'wrap',

        }}>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Pacman} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Oneeye} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Mapnew} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
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

export default Projects