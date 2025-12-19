import { useState } from "react";

function LikeButton() {

  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like)
  }
  
  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <button 
        style={{
          fontSize: '50px',
          border: 'none',
          background: 'none',
          cursor: 'pointer'
        }}
        onClick={handleLike}
      >
        {like? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default LikeButton;