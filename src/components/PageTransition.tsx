import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [stage, setStage] = useState<"in" | "out">("in");
  const [displayLoc, setDisplayLoc] = useState(location);

  useEffect(() => {
    window.scrollTo(0, 0); // instant
  }, [location]);

  useEffect(() => {
    if (location !== displayLoc) {
      setStage("out");
    }
  }, [location, displayLoc]);

  return (
    <div
      className={`transition-opacity duration-200 ${stage === "in" ? "opacity-100" : "opacity-0"}`}
      onTransitionEnd={() => {
        if (stage === "out") {
          setDisplayLoc(location);
          setStage("in");
        }
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
