import Heading from "./heading";
import Paragraph from "./paragraph";
import Extension from "./extension";
import ChromeLogo from "../assets/images/logo-chrome.svg?react";
import FirefoxLogo from "../assets/images/logo-firefox.svg?react";
import OperaLogo from "../assets/images/logo-opera.svg?react";

export default function Extensions() {
  return (
    <section
      aria-label="Available Browser Extensions"
      className="flex flex-col"
    >
      <div className=" max-w-[541px] mx-auto">
        <Heading level={2}>Download the extension</Heading>
        <Paragraph className="mt-4">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </Paragraph>
      </div>

      <div className="space-y-10 mt-10 tablet:mt-16 tablet:flex tablet:gap-2 desktop:gap-8 tablet:space-y-0 tablet:justify-center desktop:items-center">
        <div className="desktop:self-start desktop:pb-20">
          <Extension
            browser="Chrome"
            version={62}
            logo={ChromeLogo}
          ></Extension>
        </div>
        <Extension
          browser="Firefox"
          version={55}
          logo={FirefoxLogo}
        ></Extension>
        <div className="desktop:self-end desktop:pt-20">
          <Extension browser="Opera" version={46} logo={OperaLogo}></Extension>
        </div>
      </div>
    </section>
  );
}
