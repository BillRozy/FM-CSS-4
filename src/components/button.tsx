import { type ButtonHTMLAttributes } from "react";
import { cn } from "../helpers";
import {
  text_preset_2_mobile_medium,
  text_preset_6_medium,
  with_modifier,
} from "../stylesets/index";

export default function Button({
  variant = "primary",
  fullwidth = false,
  children,
  className,
  ...props
}: {
  variant?: "primary" | "neutral" | "danger";
  fullwidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  let predefinedClassName = cn(
    "flex justify-center items-center px-[14.5px] py-[9px] min-w-[114px] rounded-[5px] shadow-[0px_8px_8px_-4px_#495DCF33] ring-2 cursor-pointer transition-colors",
    text_preset_2_mobile_medium,
    with_modifier("tablet", text_preset_6_medium)
  );
  if (variant === "primary") {
    predefinedClassName = cn(
      predefinedClassName,
      "bg-blue-600 text-white ring-blue-600 hover:bg-white hover:text-blue-600"
    );
  } else if (variant === "danger") {
    predefinedClassName = cn(
      predefinedClassName,
      "bg-red-400 text-white ring-red-400 hover:bg-white hover:text-red-400"
    );
  } else {
    predefinedClassName = cn(
      predefinedClassName,
      "bg-gray-50 text-blue-950/75 ring-gray-50 hover:ring-gray-600 hover:bg-white hover:text-gray-600/75"
    );
  }
  if (fullwidth) {
    predefinedClassName = cn(predefinedClassName, "w-full");
  }
  return (
    <button className={cn(predefinedClassName, className)} {...props}>
      {children}
    </button>
  );
}
