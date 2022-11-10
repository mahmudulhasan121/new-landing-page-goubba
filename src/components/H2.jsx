import React from "react";

function H2({ text, className, ...props }) {
  return (
    <h2 className={`tw-font-bold tw-text-4xl ${className}`} {...props}>
      {text}
    </h2>
  );
}

export default H2;
