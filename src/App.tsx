import { useContext, useRef } from "react";
import "./App.css";
import GetIt from "./components/get-it";
import Header from "./components/header";
import OverflowProvider, { OverflowContext } from "./components/overflow";
import Features from "./components/features";
import { cn } from "./helpers";
import { ErrorBoundary } from "react-error-boundary";
import Extensions from "./components/extensions";
import FAQ from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

function InertContent() {
  const { isOpen } = useContext(OverflowContext);
  const scrollable = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={scrollable}
      inert={isOpen}
      className={cn(
        "h-full overflow-auto max-w-[1440px] mx-auto",
        isOpen && "overflow-hidden"
      )}
    >
      <Header scrollContainer={scrollable}></Header>
      <main className="pt-[100px] tablet:pt-[145px] desktop:pt-[66px]">
        <div className="desktop:ml-[165px]">
          <GetIt></GetIt>
        </div>
        <div className="mt-32 tablet:mt-[126px] desktop:mt-[80px]">
          <Features></Features>
        </div>
        <div className="mt-[133px] tablet:mt-[152px] desktop:mt-[163px] mx-8 tablet:mx-[77px] desktop:mx-[268px]">
          <Extensions></Extensions>
        </div>
        <div className="mt-32 tablet:mt-[142px] desktop:mt-[161px] mx-auto max-w-[540px] px-8 tablet:px-0">
          <FAQ></FAQ>
        </div>
        <div className="mt-32 tablet:mt-[158px] desktop:mt-[182px]">
          <Contact></Contact>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

function fallbackRender({ error }: { error: Error }) {
  return (
    <div role="alert" className="size-full flex-col flex p-8 gap-4">
      <p>Something went wrong:</p>
      <code style={{ color: "red" }}>{error.message}</code>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <OverflowProvider>
        <InertContent></InertContent>
      </OverflowProvider>
    </ErrorBoundary>
  );
}

export default App;
