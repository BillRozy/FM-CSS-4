import Paragraph from "./paragraph";
import Heading from "./heading";
import Tabs from "./tabs";
import Button from "./button";
import feature1 from "../assets/images/illustration-features-tab-1.svg";
import feature2 from "../assets/images/illustration-features-tab-2.svg";
import feature3 from "../assets/images/illustration-features-tab-3.svg";
import { cn } from "../helpers";

const titles = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
const features = [
  {
    title: "Bookmark in one click",
    paragraph: `Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.`,
    image: feature1,
    position:
      "w-[calc(100%-64px)] left-8 top-[44px] tablet:w-[calc(100%-169px-63px)] tablet:top-[43px] tablet:left-[169px] desktop:w-[calc(100%-169px)] desktop:top-[72px]",
    blueShitPosition: "right-[67px] tablet:right-[128px] desktop:right-[65px]",
  },
  {
    title: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: feature2,
    position:
      "w-[calc(100%-104px)] left-[52px] top-[31px] tablet:w-[calc(100%-300px)] tablet:top-[67px] tablet:left-[150px] desktop:w-[calc(100%-237px)] desktop:top-[72px] desktop:left-[227px]",
    blueShitPosition: "right-[67px] tablet:right-[247px] desktop:right-[65px]",
  },
  {
    title: "Share your bookmarks",
    paragraph: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,
    image: feature3,
    position:
      "w-[calc(100%-121px)] left-[61px] top-[31px] tablet:w-[calc(100%-175px-153px)] tablet:top-[67px] tablet:left-[175px] desktop:w-[calc(100%-244px-21px)] desktop:top-[72px] desktop:left-[244px]",
    blueShitPosition: "right-[67px] tablet:right-[247px] desktop:right-[65px]",
  },
];

function CombinedBrowserImage({
  image,
  position = "",
  blueShitPosition = "",
}: {
  image: string;
  position?: string;
  blueShitPosition?: string;
}) {
  return (
    <div className="relative w-full aspect-375/282 tablet:aspect-768/478 desktop:aspect-705/507">
      <div
        className={cn(
          "absolute rounded-[319px] bg-blue-600 bottom-0 h-[72%] aspect-577/203  desktop:h-[69.42%] tablet:aspect-1000/352 tablet:h-[73.6%]",
          blueShitPosition
        )}
      ></div>
      <div className={cn("absolute", position)}>
        <img src={image} alt="" className="size-full"></img>
      </div>
    </div>
  );
}

function Feature({
  title,
  paragraph,
  button = "More Info",
  image,
  position = "",
  blueShitPosition = "",
}: {
  title: string;
  paragraph: string;
  button?: string;
  image: string;
  position?: string;
  blueShitPosition?: string;
}) {
  return (
    <div className="space-y-8 tablet:space-y-16 desktop:space-y-0 desktop:flex flex-nowrap gap-[120px] items-center">
      <div className="desktop:basis-[705px]">
        <CombinedBrowserImage
          image={image}
          position={position}
          blueShitPosition={blueShitPosition}
        ></CombinedBrowserImage>
      </div>
      <div className="flex flex-col gap-4 mx-8 items-center desktop:items-start max-w-[450px] tablet:mx-auto desktop:mx-0 desktop:gap-6">
        <Heading level={2}>{title}</Heading>
        <Paragraph className="desktop:text-start">{paragraph}</Paragraph>
        <Button type="button">{button}</Button>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section aria-label="Features" className="space-y-8 overflow-hidden">
      <div className="flex flex-col gap-4 mx-8 tablet:max-w-[540px] tablet:mx-auto">
        <Heading level={2}>Features</Heading>
        <Paragraph>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Paragraph>
      </div>
      <div className="tablet:mt-[72px]">
        <Tabs tabsTitles={titles}>
          {features.map((it) => (
            <Feature {...it}></Feature>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
