import { type HTMLProps } from "react";
import { cn } from "../helpers";
import {
  text_preset_2_mobile_regular,
  text_preset_4,
  with_modifier,
} from "../stylesets/index";

export default function Paragraph({
  children,
  className,
  ...rest
}: HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "opacity-50 text-center",
        text_preset_2_mobile_regular,
        with_modifier("tablet", text_preset_4),
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
