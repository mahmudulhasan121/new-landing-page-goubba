import React from "react";

export default function H1({ text, className, ...props }) {
  return (
    <h1 className={`tw-font-bold tw-text-6xl ${className}`} {...props}>
      {text}
    </h1>
  );
}
