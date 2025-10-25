import React from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Spoiler from "./spoiler";
import Button from "./button";

const spoilers = [
  {
    title: "What is Bookmark?",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, aut.",
  },
  {
    title: "How can I request a new browser?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam incidunt placeat quia, deleniti culpa exercitationem maiores quos enim omnis velit?",
  },
  {
    title: "Is there a mobile app?",
    details: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "What about other Chromium browsers?",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis eius praesentium libero quis. Ab impedit maiores est expedita consectetur ut suscipit ex ipsa.",
  },
];

function Separator() {
  return <div className="h-[1px] bg-blue-950/15 w-full"></div>;
}

export default function FAQ() {
  return (
    <section aria-label="Frequently Asked Questions">
      <div className="flex flex-col gap-4 mb-14">
        <Heading level={2}>Frequently Asked Questions</Heading>
        <Paragraph>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Paragraph>
      </div>
      <Separator></Separator>
      <ul className="mb-14">
        {spoilers.map(({ title, details }) => (
          <li key={title}>
            <Spoiler title={title} details={details}></Spoiler>
            <Separator></Separator>
          </li>
        ))}
      </ul>
      <Button className="mx-auto" type="button">
        More Info
      </Button>
    </section>
  );
}
