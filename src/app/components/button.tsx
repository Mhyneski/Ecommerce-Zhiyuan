import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  design?: string;
}

export default function Button ({ text, onClick, design }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full w-[250px] bg-[linear-gradient(90deg,#ffffff,#003968)] px-4 py-4 text-white ${design}`}
    >
      {text}
    </button>
  );
}
