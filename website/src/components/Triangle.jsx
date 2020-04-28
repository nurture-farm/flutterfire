import React from 'react';

function Triangle({ zIndex = 0, color, style = {}, rotate = 0 }) {
  return (
    <svg
      width={500}
      height={500}
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color}`}
      style={{
        position: 'absolute',
        zIndex,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      <path
        fill="currentColor"
        d="
          M 0,0
          L 0,500
          L 500,0
          z
        "
      />
    </svg>
  );
}

export { Triangle };
