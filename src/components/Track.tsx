import { Row, Col, Button } from 'react-bootstrap';

interface TrackProps {
	color: string;
	audioFile: string;
}

function Track({ color, audioFile }: TrackProps) {
	const file = require(`../assets/audio/${audioFile}`);
	const audio = new Audio(file);

	const mute = () => {
		audio.muted = !audio.muted;
	};

	return (
		<Row className="m-4" style={{ backgroundColor: color }}>
			<Col xs={1}>
				<Button variant="link" onClick={mute}>
					{audio.muted ? 'Unmute' : 'Mute'}
				</Button>
			</Col>
			<Col>{audioFile.match(/.+?(?=.mp3)/)}</Col>
		</Row>
	);
}

export default Track;
