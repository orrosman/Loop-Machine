import { Container, Row, Col, Button } from 'react-bootstrap';
import Track from './Track';
import Cursor from './Cursor';
import { useState, useEffect, useRef } from 'react';
import pause from '../assets/images/pause-circle.svg';
import pauseFill from '../assets/images/pause-circle-fill.svg';
import play from '../assets/images/play-circle.svg';
import playFill from '../assets/images/play-circle-fill.svg';

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
	const [progress, setProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLooping, setIsLooping] = useState(false);

	const tracks = useRef([
		...audioFiles.map((filename) => {
			const file = require(`../assets/audio/${filename}`);
			return new Audio(file);
		}),
	]);

	useEffect(() => {
		tracks.current[0].addEventListener('timeupdate', () => {
			setProgress(
				(tracks.current[0].currentTime / tracks.current[0].duration) * 100
			);
		});
	}, []);

	const handlePlay = () => {
		tracks.current.forEach((track) => {
			track.play();
			track.onended = () => {
				track.currentTime = 0;
			};
			setIsPlaying(true);
		});
	};

	const handleStop = () => {
		tracks.current.forEach((track) => track.pause());
		setIsPlaying(false);
	};

	const handleLoop = () => {
		tracks.current.forEach((track) => (track.loop = !track.loop));
		setIsLooping(!isLooping);
	};

	return (
		<Container className="position-relative">
			<Row>
				<Col>
					<Cursor progress={progress} />
				</Col>
			</Row>
			{tracks.current.map((track, i) => (
				<Track
					key={i}
					audioFile={track}
					audioName={audioFiles[i]}
					color={colors[i]}
				/>
			))}
			<Row>
				<Col className="d-flex justify-content-center">
					<Button onClick={handlePlay}>
						<img src={isPlaying ? playFill : play} alt="play"></img>
					</Button>
				</Col>
				<Col className="d-flex justify-content-center">
					<Button onClick={handleStop}>
						<img src={isPlaying ? pause : pauseFill} alt="pause"></img>
					</Button>
				</Col>
				<Col className="d-flex justify-content-center">
					<Button onClick={handleLoop}>
						{isLooping ? 'Loop ON' : 'Loop OFF'}
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
