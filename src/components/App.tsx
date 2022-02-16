import { Container, Row, Col, Button } from 'react-bootstrap';
import Track from './Track';

const audioFiles = [
	'LEAD 1.mp3',
	'B VOC.mp3',
	'HIGH VOC.mp3',
	'JIBRISH.mp3',
	'HE HE VOC.mp3',
	'UUHO VOC.mp3',
	'DRUMS.mp3',
	'_tambourine_shake_higher.mp3',
	// 'ALL TRACK.mp3',
];

const colors = [
	'#eec9c9',
	'#e7cfa1',
	'#c9e7a1',
	'#a1e7d0',
	'#a1ace7',
	'#bca1e7',
	'#e7a1d8',
	'#e76490',
];

function App() {
	const tracks: HTMLAudioElement[] = [
		...audioFiles.map((filename) => {
			const file = require(`../assets/audio/${filename}`);
			return new Audio(file);
		}),
	];

	const handlePlay = () => {
		tracks.forEach((track) => track.play());
	};

	const handleStop = () => {
		tracks.forEach((track) => track.pause());
	};

	return (
		<Container>
			{tracks.map((track, i) => (
				<Track
					key={i}
					audioFile={track}
					audioName={audioFiles[i]}
					color={colors[i]}
				/>
			))}
			<Row>
				<Col>
					<Button onClick={handlePlay}>Play</Button>
				</Col>
				<Col>
					<Button onClick={handleStop}>Stop</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
