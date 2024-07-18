import BioCard from '../../components/bioCard'
import YoutubeEmbed from '../../components/youTubeEmbed';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div className='App'>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '5px',
                flexDirection: 'row'

            }}
            >
                <div style={{display: 'flex'
                }}>
                    <BioCard />
                    <YoutubeEmbed embedId='ty_mlNuzll8?si=IdfUortm0KZ90j_v'/>
                </div>
            </div>

        </div>
    )
}

export default Home;