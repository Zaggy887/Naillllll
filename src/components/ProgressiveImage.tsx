import React, { useEffect, useRef, useState } from "react";

const ProgressiveImage: React.FC<{
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
}> = ({ src, alt, placeholder, className = "" }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  return (
    <div className="relative overflow-hidden">
      {!loaded && placeholder && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        />
      )}

      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        fetchpriority="auto"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${className} transition-opacity duration-150 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          Image unavailable
        </div>
      )}
    </div>
  );
};

export default ProgressiveImage;
