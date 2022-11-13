import React from "react";

function Text({ text, className, ...props }) {
  return (
    <p className={`lg:tw-font-light lg:tw-text-xl ${className}`} {...props}>
      {text}
    </p>
  );
}

export default Text;
