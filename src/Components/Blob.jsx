import { useEffect, useState } from 'react';

export default function Blob() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 100;
      const y = (e.clientY / innerHeight - 0.5) * 100;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="absolute w-[40rem] h-[40rem] rounded-full blur-[120px] opacity-50 bg-gradient-to-tr from-purple-400 via-pink-300 to-indigo-300 mix-blend-multiply pointer-events-none z-10"
      style={{
        transform: `translate(${offset.x * 4}px, ${offset.y * 4}px)`,
        transition: 'transform 0.2s ease-out',
        willChange: 'transform',
      }}
    />
  );
}
