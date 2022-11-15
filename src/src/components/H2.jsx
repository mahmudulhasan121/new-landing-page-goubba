import React from "react";

function H2({ text, className, ...props }) {
  return (
    <h2
      className={`tw-font-medium tw-text-2xl lg:tw-font-bold lg:tw-text-4xl ${className}`}
      {...props}
    >
      {text}
    </h2>
  );
}

export default H2;
// font-medium text-2xl leading-8
