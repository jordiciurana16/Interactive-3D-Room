import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const UserInterface = ({ likes, views }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="user-interface">
      <div className='pe-2'>
      <div className="likes-counter">
        <span>{likes} likes</span>
      </div>
      <div className="views-counter">
        <span>{views} visits</span>
      </div>
      </div>
      <button onClick={handleLikeClick} className="like-button">
        <FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} color={isLiked ? 'black' : 'black'} />
      </button>
    </div>
  );
};

export default UserInterface;
