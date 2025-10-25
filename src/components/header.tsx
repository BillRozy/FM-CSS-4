import {
  useContext,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
  type RefObject,
} from "react";
import Logo from "./logo";
import Menu, { MenuInOverflow } from "./menu";
import { OverflowContext } from "./overflow";
import HamburgerIcon from "../assets/images/icon-hamburger.svg?react";
import CloseIcon from "../assets/images/icon-close.svg?react";
import Socials from "./socials";

function MenuButton({
  open = false,
  ...rest
}: { open?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="block"
      aria-label={open ? "Close Menu" : "Open Menu"}
      {...rest}
    >
      {open ? <CloseIcon></CloseIcon> : <HamburgerIcon></HamburgerIcon>}
    </button>
  );
}

function LoginButton({ inOverflow = false }: { inOverflow?: boolean }) {
  return (
    <>
      {inOverflow ? (
        <button
          type="button"
          className="block cursor-pointer w-full border-2 border-white rounded-sm py-[15.5px] text-white text-xl tracking-[2.31px] leading-[17px] font-medium hover:text-red-400 hover:border-red-400"
        >
          LOGIN
        </button>
      ) : null}
    </>
  );
}

function OverflowPage({ header }: { header: ReactNode }) {
  return (
    <div className="size-full bg-blue-950/95 px-8 pt-10 pb-12 tablet:px-20 flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="flex justify-between items-center">{header}</div>
        <div className="mt-10 mb-6">
          <MenuInOverflow></MenuInOverflow>
        </div>
        <LoginButton inOverflow></LoginButton>
      </div>

      <Socials></Socials>
    </div>
  );
}

export default function Header({
  scrollContainer,
}: {
  scrollContainer?: RefObject<HTMLDivElement | null>;
}) {
  const { setOverflow } = useContext(OverflowContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [opacityLevel, setOpacityLevel] = useState(100);
  const commonPart = (
    <>
      <Logo variant={menuOpen ? "inverted" : "normal"}></Logo>
      <div className="desktop:hidden h-fit">
        <MenuButton
          open={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        ></MenuButton>
      </div>
    </>
  );
  useEffect(() => {
    if (scrollContainer?.current) {
      let ticking = false;
      const handler = (event: Event) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const target = event.target as HTMLElement;
            setOpacityLevel(Math.min(100, Math.max(100 - target.scrollTop, 0)));
            ticking = false;
          });
          ticking = true;
        }
      };
      scrollContainer?.current.addEventListener("scroll", handler);
      return () =>
        scrollContainer?.current?.removeEventListener("scroll", handler);
    }
    return;
  }, [scrollContainer]);

  useEffect(() => {
    if (menuOpen) {
      setOverflow(<OverflowPage header={commonPart}></OverflowPage>);
    } else {
      setOverflow(null);
    }
  }, [menuOpen]);
  return (
    <header
      className="flex justify-between items-center fixed p-8 pt-10 pb-[35px] w-full tablet:px-20 desktop:static desktop:py-12 desktop:pl-[171px] desktop:pr-[165px]"
      style={{ opacity: `${opacityLevel}%` }}
    >
      {!menuOpen && commonPart}
      <div className="hidden desktop:block">
        <Menu isMain></Menu>
      </div>
    </header>
  );
}
