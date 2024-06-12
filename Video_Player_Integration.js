import React from 'react';
import ReactPlayer from 'react-player';

const MoviePlayer = ({ url }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        controls
      />
    </div>
  );
};

export default MoviePlayer;
