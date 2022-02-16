import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  console.log('box', box);
  return (
    <div className='center ma'>
      {imageUrl ? (
        <div className='absolute mt2 '>
          <img
            id='inputimage'
            src={imageUrl}
            alt='a face'
            width='500px'
            height='auto'
          />
          <div
            className='bounding-box'
            style={{
              top: box[0].topRow,
              right: box[0].rightCol,
              bottom: box[0].bottomRow,
              left: box[0].leftCol,
            }}
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default FaceRecognition;
