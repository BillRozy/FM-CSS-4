import React, { useState, type PropsWithChildren } from "react";
import { cn } from "../helpers";
import {
  text_preset_2_mobile_regular,
  text_preset_5,
  with_modifier,
} from "../stylesets";

function TabContent({
  visible,
  children,
}: PropsWithChildren & { visible: boolean; index: number }) {
  return (
    <div
      className={cn(
        "absolute w-full left-0 top-0 transition-[translate,opacity] -translate-x-full opacity-0 duration-500 ease-in-out",
        visible && "relative translate-x-0 opacity-100"
      )}
      inert={!visible}
    >
      {children}
    </div>
  );
}

export default function Tabs({
  defaultTab = 0,
  children,
  tabsTitles,
}: { defaultTab?: number; tabsTitles: string[] } & PropsWithChildren) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const childArray = React.Children.toArray(children);
  if (childArray.length < tabsTitles.length) {
    throw new Error(
      "You should pass the same amount of tabs content as tabsTitles"
    );
  }
  return (
    <>
      <ul
        aria-label="Tabs"
        role="tablist"
        className="tablet:columns-3 tablet:gap-0 max-w-[730px] mx-auto tablet:px-20"
      >
        {tabsTitles.map((it, index) => (
          <li
            key={it}
            className="first:border-t tablet:first:border-t-0 border-b border-[#495DCF33] flex flex-col px-[74px] tablet:px-0"
          >
            <button
              className={cn(
                "relative t-preset-2-mobile-regular opacity-75 flex items-center justify-center py-4 after:absolute after:w-full after:bottom-0 after:border-b-4 after:border-b-red-400/0 after:transition-colors tablet:pt-0 tablet:pb-6 cursor-pointer hover:text-red-400 transition-colors after:duration-300",
                selectedTab === index && "after:border-b-red-400",
                text_preset_2_mobile_regular,
                with_modifier("tablet", text_preset_5)
              )}
              role="tab"
              aria-selected={selectedTab === index}
              type="button"
              onClick={() => setSelectedTab(index)}
            >
              {it}
            </button>
          </li>
        ))}
      </ul>
      <section
        aria-label={tabsTitles[selectedTab]}
        className="relative desktop:mr-[165px]"
      >
        {childArray.map((child, index) => (
          <TabContent key={index} visible={selectedTab === index} index={index}>
            {child}
          </TabContent>
        ))}
      </section>
    </>
  );
}
