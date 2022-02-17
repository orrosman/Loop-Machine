import { useRef, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface TrackProps {
	color: string;
	audioFile: HTMLAudioElement;
	audioName: string;
}

function Track({ color, audioFile, audioName }: TrackProps) {
	const [muted, setMuted] = useState(false);
	const audio = useRef(audioFile);

	const mute = () => {
		setMuted(!muted);
		audio.current.muted = !muted;
	};

	return (
		<Row className="track m-4" style={{ backgroundColor: color }}>
			<Col xs={1}>
				<Button variant="link" onClick={mute}>
					{audio.current.muted ? 'Unmute' : 'Mute'}
				</Button>
			</Col>
			<Col>{audioName.match(/.+?(?=.mp3)/)}</Col>
		</Row>
	);
}

export default Track;
