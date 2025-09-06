import React from "react";

function LoadingOverlay({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-zinc-200 dark:bg-slate-900 flex items-center justify-center transition-opacity duration-500">
      <div className="loader"></div>
    </div>
  );
}

export default LoadingOverlay;