import React from "react";
import FacebookIcon from "../assets/images/icon-facebook.svg?react";
import XIcon from "../assets/images/icon-twitter.svg?react";
import { cn } from "../helpers";

const links = [
  {
    title: "Facebook",
    icon: <FacebookIcon className="size-6 fill-current"></FacebookIcon>,
  },
  {
    title: "Twitter",
    icon: <XIcon className="w-6 fill-current"></XIcon>,
  },
];

export default function Socials({ className }: { className?: string }) {
  return (
    <ul
      aria-label="Social media links"
      className={cn("flex gap-6 items-center", className)}
    >
      {links.map(({ title, icon: Icon }) => (
        <li key={title}>
          <a
            aria-label={`${title} link`}
            href={"#" + title.toLowerCase()}
            className="text-white hover:text-red-400"
          >
            {Icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
