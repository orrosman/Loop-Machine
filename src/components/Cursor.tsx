interface CursorProps {
	progress: number;
}

function Cursor({ progress }: CursorProps) {
	return (
		<div
			style={{
				height: '84.5%',
				width: '1px',
				backgroundColor: 'black',
				position: 'absolute',
				left: `${progress}%`,
				transition: '1s linear',
				marginLeft: `2.2rem`,
				marginTop: `1.5rem`,
			}}
		></div>
	);
}

export default Cursor;
