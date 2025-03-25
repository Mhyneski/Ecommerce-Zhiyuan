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
        className={`rounded-full text-white before:bg-[linear-gradient(90deg,#000000,#1584bb)] ${design}`}
      >
        {text}
      </button>
    );
  }
  