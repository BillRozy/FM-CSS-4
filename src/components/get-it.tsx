import siteOnScreen from "../assets/images/illustration-hero.svg";
import { cn } from "../helpers";
import { text_preset_1, with_modifier } from "../stylesets/index";
import Button from "./button";
import Heading from "./heading";
import Paragraph from "./paragraph";

function CombinedBrowserImage() {
  return (
    <div className="relative w-full aspect-5/4 tablet:aspect-768/486 desktop:aspect-735/486 overflow-hidden">
      <div className="absolute rounded-[319px] aspect-577/203 h-[67.6%] bg-blue-600 tablet:aspect-1000/352 tablet:h-[72.4%] right-0 bottom-0 translate-x-1/2"></div>
      <div className="absolute w-[calc(100%-64px)] tablet:w-[calc(100%-190px)] left-1/2 top-1/2 -translate-1/2 tablet:top-0 tablet:translate-y-0 tablet:left-[98.5px] tablet:translate-x-0 desktop:left-[64.6px] desktop:w-[calc(100%-156px)]">
        <img src={siteOnScreen} alt="" className="size-full"></img>
      </div>
    </div>
  );
}

function Description() {
  return (
    <>
      <Heading
        level={1}
        className={cn(
          with_modifier("tablet", text_preset_1),
          "desktop:text-start"
        )}
      >
        A Simple Bookmark Manager
      </Heading>
      <Paragraph className="desktop:text-start">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </Paragraph>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" className="desktop:px-6" type="button">
          Get it on Chrome
        </Button>
        <Button variant="neutral" className="desktop:px-6" type="button">
          Get it on Firefox
        </Button>
      </div>
    </>
  );
}

export default function GetIt() {
  return (
    <section
      aria-label="Get Bookmark Manager"
      className="desktop:flex items-center gap-0 flex-nowrap"
    >
      <div className="order-2 basis-[735px]">
        <CombinedBrowserImage></CombinedBrowserImage>
      </div>
      <div className="mt-[72px] flex flex-col gap-6 desktop:items-start mx-[31px] tablet:mx-[114px] order-1 basis-[540px] desktop:m-0">
        <Description></Description>
      </div>
    </section>
  );
}
