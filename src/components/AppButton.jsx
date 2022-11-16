import React from "react";
import Text from "./Text";

function AppButton({ title, onClick, className, ...props }) {
  return (
    <button
      className={`tw-w-full lg:tw-w-fit tw-py-4 tw-px-20 tw-text-white tw-text-center tw-bg-[#BA1986] tw-rounded-md hover:tw-opacity-90 ${className}`}
      onClick={onClick}
      {...props}
    >
      <Text text={title} style={{ fontWeight: 700 }} />
    </button>
  );
}

export default AppButton;
