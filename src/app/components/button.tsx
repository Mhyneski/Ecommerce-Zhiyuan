import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  design?: string;
}

export default function Button({ text, onClick, design }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`relative rounded-full w-[250px] cursor-pointer px-4 py-4 text-white bg-transparent before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(90deg,#000000,#1584bb)] before:-z-10 ${design}`}
      >
        {text}
      </button>
    );
  }
  