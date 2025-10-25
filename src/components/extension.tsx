import React from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Button from "./button";
import {
  text_preset_3,
  text_preset_6,
  text_preset_6_medium,
  with_modifier,
} from "../stylesets/index";
import { cn } from "../helpers";

export default function Extension({
  logo: Logo,
  browser,
  version,
}: {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  browser: string;
  version: number;
}) {
  return (
    <article
      aria-label="Extension Card"
      className="flex flex-col items-center rounded-[15px] shadow-[0px_10px_20px_-5px_#495DCF0D] pt-[26px] pb-8 tablet:pb-6 tablet:pt-8 desktop:pb-8 desktop:min-w-[280px] desktop:shrink-0"
    >
      <Logo></Logo>
      <div className="space-y-2 mt-8 tablet:mt-4 tablet:space-y-0 desktop:mt-8 desktop:space-y-2 desktop:px-[30px]">
        <Heading
          level={3}
          className={cn(
            "text-2xl leading-[200%]",
            with_modifier("tablet", text_preset_3)
          )}
        >
          Add To {browser}
        </Heading>
        <Paragraph
          className={cn(
            with_modifier("tablet", text_preset_6),
            with_modifier("desktop", text_preset_6_medium)
          )}
        >
          Minimum version {version}
        </Paragraph>
      </div>

      <div className="border-b-4 border-dotted border-muted/20 w-full mt-6 tablet:mt-4 desktop:mt-6"></div>
      <div className="px-6 mt-6 w-full tablet:px-[9.5px] desktop:px-6">
        <Button
          fullwidth
          type="button"
          className="tablet:px-[9px] tablet:py-[3px] desktop:px-8 desktop:py-2 desktop:min-h-12"
        >
          Add & Install Extension
        </Button>
      </div>
    </article>
  );
}
