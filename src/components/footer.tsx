import Logo from "./logo";
import Socials from "./socials";
import Menu from "./menu";

export default function Footer() {
  return (
    <footer className="flex flex-col tablet:flex-row justify-between items-center gap-12 py-[33px] tablet:py-[30px] bg-blue-950 tablet:px-20 desktop:px-[165px]">
      <div className="flex flex-col items-center tablet:flex-row gap-12 tablet:gap-16 justify-start">
        <Logo variant="half-inverted"></Logo>
        <Menu></Menu>
      </div>
      <Socials className="gap-10"></Socials>
    </footer>
  );
}
