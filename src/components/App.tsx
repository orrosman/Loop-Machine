import { Container, Row } from 'react-bootstrap';
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
	'ALL TRACK.mp3',
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
	for (const fileName of audioFiles) {
		const file = require(`../assets/audio/${fileName}`);
	}

	return (
		<Container>
			{audioFiles.map((filename, colorIndex) => {
				return (
					<Track
						key={filename}
						audioFile={filename}
						color={colors[colorIndex]}
					/>
				);
			})}
		</Container>
	);
}

export default App;
