import { cn } from "../helpers";
import {
  text_preset_2_mobile_regular,
  text_preset_6,
  with_modifier,
} from "../stylesets/index";
import Button from "./button";

const links = ["FEATURES", "PRICING", "CONTACT"];
export default function Menu({ isMain = false }: { isMain?: boolean }) {
  return (
    <nav aria-label={isMain ? "Primary Menu" : "Footer Links"}>
      <ul
        className={cn(
          "flex",
          isMain
            ? "gap-12"
            : "flex-col tablet:flex-row gap-6 text-white items-center",
          isMain ? text_preset_6 : text_preset_2_mobile_regular,
          !isMain && with_modifier("tablet", text_preset_6)
        )}
      >
        {links.map((it) => (
          <li
            key={it}
            className="flex justify-center items-center cursor-pointer hover:text-red-400"
          >
            <a href={`#${it.toLowerCase()}`}>{it}</a>
          </li>
        ))}
        {isMain && (
          <li>
            <Button
              variant="danger"
              type="button"
              className={cn(
                with_modifier("desktop", text_preset_6),
                "w-[111px] h-10"
              )}
            >
              LOGIN
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function MenuInOverflow() {
  return (
    <nav aria-label="Primary Menu">
      <ul className="border-t border-[#97979726]">
        {links.map((it) => (
          <li
            key={it}
            className="border-b border-[#97979726] text-center cursor-pointer"
          >
            <a
              href={`#${it.toLowerCase()}`}
              className="block py-8 text-white text-xl tracking-[2.31px] leading-[17px]"
            >
              {it}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
