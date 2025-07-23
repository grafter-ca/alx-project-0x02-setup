"use client";

import React from "react";
import {type ButtonProps } from "@/interfaces";
import clsx from "clsx"; // Optional: for cleaner class merging

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2 text-base",
  large: "px-7 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-blue-600 text-white hover:bg-blue-700 transition-colors",
        sizeClasses[size],
        shape,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
