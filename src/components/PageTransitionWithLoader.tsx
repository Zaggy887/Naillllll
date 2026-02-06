/**
 * Instant transitions:
 * - Fade OUT only
 * - Instant fade IN
 * - No loading delay
 */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransitionWithLoader: React.FC<{ children: React.ReactNode; fadeOutDuration?: number }> = ({
  children,
  fadeOutDuration = 200
}) => {
  const location = useLocation();
  const [displayLoc, setDisplayLoc] = useState(location);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (location !== displayLoc) {
      setFadingOut(true);
      setTimeout(() => {
        setDisplayLoc(location);
        setFadingOut(false);
      }, fadeOutDuration);
    }
  }, [location, displayLoc, fadeOutDuration]);

  return (
    <div
      style={{
        opacity: fadingOut ? 0 : 1,
        transition: `opacity ${fadeOutDuration}ms ease-out`
      }}
    >
      {children}
    </div>
  );
};

export default PageTransitionWithLoader;
