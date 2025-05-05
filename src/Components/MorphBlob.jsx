import { useEffect, useRef } from "react";

export default function MorphBlobs() {
  const mouseBlobRef = useRef(null);

  useEffect(() => {
    const mouseBlob = mouseBlobRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      mouseBlob.animate(
        {
          transform: `translate(${clientX - 100}px, ${clientY - 100}px)`,
        },
        {
          duration: 800,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-visible pointer-events-none">
      {/* Gooey Filter Container */}
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div
  className="absolute top-0 left-0 w-full min-h-full z-0 pointer-events-none"
  style={{ filter: "url(#goo)" }}
>

        {/* Floating Blobs */}
        <div className="blob floatBlob1 bg-yellow-600 top-[10%] left-[30%]" />
        <div className="blob floatBlob2 bg-pink-500 top-[40%] left-[60%]" />
        <div className="blob floatBlob3 bg-green-600 top-[65%] left-[30%]" />
        <div className="blob floatBlob4 bg-indigo-400 top-[40%] left-[10%]" />


        {/* Mouse-Following Blob */}
        <div
            ref={mouseBlobRef}
            className="mouseblob bg-purple-400 fixed top-0 left-0"
        />

      </div>
    </div>
  );
}
