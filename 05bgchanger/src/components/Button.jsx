import React from 'react';

function Button({color, onClick}) {
  const handleClick = () => {
    onClick(color);
   }; // Call the parent's function and pass the color
  return (
    
    
    
    
    
    <button
      className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all items-center"
      style={{ backgroundColor: color }}
      onClick={handleClick}
      
    >
      {color}
      
    </button>
  );
}

export default Button;
