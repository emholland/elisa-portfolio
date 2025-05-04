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
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
        className="absolute inset-0"
        style={{ filter: "url(#goo)", width: "100%", height: "100%" }}
      >
        {/* Floating Blobs */}
        <div className="blob floatBlob1 bg-purple-600 top-[10%] left-[10%]" />
        <div className="blob floatBlob2 bg-pink-500 top-[50%] left-[60%]" />
        <div className="blob floatBlob3 bg-indigo-600 top-[75%] left-[30%]" />

        {/* Mouse-Following Blob */}
        <div
            ref={mouseBlobRef}
            className="mouseblob bg-yellow-400 fixed top-0 left-0 w-[100px] h-[100px]"
        />

      </div>
    </div>
  );
}
