import { type HTMLProps, type JSX } from "react";
import { cn } from "../helpers";
import {
  text_preset_1_mobile,
  text_preset_2,
  with_modifier,
} from "../stylesets/index";

export default function Heading({
  level,
  children,
  className = "",
}: HTMLProps<HTMLHeadingElement> & { level: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  return (
    <Tag
      className={cn(
        "text-center",
        text_preset_1_mobile,
        with_modifier("tablet", text_preset_2),
        className
      )}
    >
      {children}
    </Tag>
  );
}
