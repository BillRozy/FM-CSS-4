import { useRef, useState, type FormEvent } from "react";
import { cn } from "../helpers";
import {
  text_preset_2_mobile_regular,
  text_preset_3_mobile,
  text_preset_6_semibold,
  text_preset_7,
  with_modifier,
} from "../stylesets/index";
import Heading from "./heading";
import Button from "./button";
import ErrorIcon from "../assets/images/icon-error.svg?react";

const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEXP.test(email);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError("Whoops, make sure it’s an email");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      setError(null);
      alert(`Submitted email: ${email}`);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 tablet:flex-row">
        <div
          className={cn("relative has-focus:outline-1 rounded-[5px] w-full")}
        >
          <input
            type="text"
            name="email"
            ref={inputRef}
            aria-label="Email Address"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            className={cn(
              "peer relative bg-white text-blue-950 placeholder:text-black/25 px-4 py-[11.5px] rounded-[5px] h-12 w-full",
              error && "border-2 border-red-400 pr-10 z-10",
              with_modifier("placeholder", text_preset_2_mobile_regular)
            )}
          ></input>
          {error && (
            <>
              <div
                className={cn(
                  "relative w-full text-white bg-red-400 rounded-b-[5px] -translate-y-1 pt-2 pb-1.5 px-3",
                  text_preset_7
                )}
              >
                {error}
              </div>
              <ErrorIcon className="absolute size-5 right-[15px] top-3.5 z-15"></ErrorIcon>
            </>
          )}
        </div>

        <Button
          type="submit"
          variant="danger"
          fullwidth
          className="tablet:basis-[126px] tablet:shrink-0 self-start min-h-12"
        >
          Contact Us
        </Button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      aria-label="Contact Us"
      className="bg-blue-600 py-[38px] px-8 text-white tablet:pt-[56px] tablet:pb-[78px]"
    >
      <div className="max-w-[442px] mx-auto">
        <div
          className={cn(
            "text-center",
            text_preset_3_mobile,
            with_modifier("tablet", text_preset_6_semibold)
          )}
        >
          35,000+ ALREADY JOINED
        </div>
        <Heading level={2} className="text-white tablet:mt-6 mb-8">
          Stay up-to-date with what we’re doing
        </Heading>
        <ContactForm></ContactForm>
      </div>
    </section>
  );
}
