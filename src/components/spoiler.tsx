import { cn } from "../helpers";
import {
  text_preset_2_mobile_light,
  text_preset_2_mobile_regular,
  text_preset_4,
  text_preset_5_light,
  with_modifier,
} from "../stylesets/index";
import IconArrow from "../assets/images/icon-arrow.svg?react";

export default function Spoiler({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  return (
    <details className="group overflow-hidden">
      <summary className="py-4 list-none flex justify-between items-center group-hover:first:text-red-400 cursor-pointer tablet:pr-6">
        <span
          className={cn(
            text_preset_2_mobile_regular,
            with_modifier("tablet", text_preset_4)
          )}
        >
          {title}
        </span>
        <IconArrow className="w-4 h-2 group-open:rotate-180 transition-transform text-blue-600 group-open:text-red-400"></IconArrow>
      </summary>
      <div className="overflow-hidden mb-4">
        <p
          className={cn(
            text_preset_2_mobile_light,
            with_modifier("tablet", text_preset_5_light),
            "[*]:opacity-75 group-open:animate-appear"
          )}
        >
          {details}
        </p>
      </div>
    </details>
  );
}
