import React, { useState } from 'react';


const LikeButton = () => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    
    setIsClicked(!isClicked);
  };
  

  return (
    <div  onClick={handleClick} className={ `like-button ${isClicked && 'liked'}` }>
        <box-icon name='heart'></box-icon>
        </div >
  )
}

export default LikeButton;