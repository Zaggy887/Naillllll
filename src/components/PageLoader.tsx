import React from "react";

interface PageLoaderProps {
  show?: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ show = false }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="spinner" />
    </div>
  );
};

export default PageLoader;
