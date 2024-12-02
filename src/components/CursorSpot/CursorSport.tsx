import React, { useEffect, useState } from 'react';
import ReactCurvedText from 'react-curved-text';

const SpinningTextCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: cursorPos.y,
        left: cursorPos.x,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    >
      <div
        style={{
          width: '10px',  // Smaller dot size
          height: '10px',
          backgroundColor: '#fff', // White dot
          borderRadius: '50%', // Dot shape
          position: 'absolute',
          top: '100%', // Center the dot vertically
          left: '100%', // Center the dot horizontally
          transform: 'translate(-50%, -50%)', // Offset by half the size
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-100px', // Adjust as needed for proper rotation distance
          left: '-100px', // Adjust as needed for proper rotation distance
          transform: `rotate(${rotation}deg)`, // Rotate the text
          transformOrigin: 'center', // Center the rotation
        }}
      >
        <ReactCurvedText
          width={200}
          height={200}
          cx={100}
          cy={100}
          rx={75}
          ry={75}
          text="HOMES • BUILD WITH DISTINCTION • EXECUTIVE"
          textProps={{
            style: {
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fill: '#fff',
              opacity: 0.6,
              letterSpacing: '2.75px',
              textTransform: 'uppercase',
            },
          }}
          svgProps={{
            style: { transformOrigin: 'center' },
          }}
        />
      </div>
    </div>
  );
};

export default SpinningTextCursor;
