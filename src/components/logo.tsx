import LogoIcon from "../assets/images/logo-bookmark.svg?react";
import LogoIconInverted from "../assets/images/logo-bookmark-inverted.svg?react";
import LogoIconInvertedHalf from "../assets/images/logo-bookmark-inverted-half.svg?react";

export default function Logo({
  variant = "normal",
}: {
  variant?: "normal" | "inverted" | "half-inverted";
}) {
  const size = "cursor-pointer h-[25px] w-[148px]";
  switch (variant) {
    case "normal":
      return <LogoIcon className={size}></LogoIcon>;
    case "inverted":
      return <LogoIconInverted className={size}></LogoIconInverted>;
    case "half-inverted":
      return <LogoIconInvertedHalf className={size}></LogoIconInvertedHalf>;
    default:
      return null;
  }
}
