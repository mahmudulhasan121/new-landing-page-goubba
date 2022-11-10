import React from "react";

function Text({ text, className, ...props }) {
  return (
    <p className={`tw-font-light tw-text-xl ${className}`} {...props}>
      {text}
    </p>
  );
}

export default Text;
