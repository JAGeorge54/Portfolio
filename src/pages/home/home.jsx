import BioCard from '../../components/bioCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div className='App'>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '5px'

            }}
            >
                <div>
                    <BioCard />
                </div>

            </div>

        </div>
    )
}

export default Home;