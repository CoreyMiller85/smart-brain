import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className="center ma">
			{imageUrl ? (
				<div className="absolute mt2 ">
					<img
						id="inputimage"
						src={imageUrl}
						alt="a face"
						width="500px"
						height="auto"
					/>
					<div
						className="bounding-box"
						style={{
							top: box.topRow,
							right: box.rightCol,
							bottom: box.bottomRow,
							left: box.leftCol,
						}}
					></div>
				</div>
			) : null}
		</div>
	);
};

export default FaceRecognition;