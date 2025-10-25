import {
  createContext,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";

export const OverflowContext = createContext<{
  setOverflow: (node: ReactNode | null) => void;
  isOpen: boolean;
}>({
  setOverflow: () => null,
  isOpen: false,
});

function Overflow({
  children,
  hidden = false,
}: PropsWithChildren & { hidden?: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!hidden) {
      const focusableSelectors = [
        "a[href]",
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
      ];
      const allElements =
        container.current?.querySelectorAll(focusableSelectors.join(",")) ?? [];
      const firstElem = allElements[0];
      if (firstElem) {
        setTimeout(() => {
          (firstElem as HTMLElement & { focus: () => void }).focus();
        }, 300);
      }
    }
  }, [hidden]);
  return (
    <div
      ref={container}
      role="dialog"
      aria-label="Overflow Menu"
      aria-modal
      className={`z-100 fixed inset-0 size-full desktop:hidden transition-all will-change-transform ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
}

export default function OverflowProvider({ children }: PropsWithChildren) {
  const [overflowContent, setOverflowContent] = useState<ReactNode | null>(
    null
  );
  const [hidden, setHidden] = useState(true);
  const setOverflow = (content: ReactNode | null) => {
    if (content !== null) {
      setOverflowContent(content);
      setHidden(false);
    } else {
      setHidden(true);
      setTimeout(() => {
        setOverflowContent(null);
      }, 300);
    }
  };
  return (
    <OverflowContext.Provider
      value={{
        setOverflow,
        isOpen: !hidden,
      }}
    >
      {children}
      <Overflow hidden={hidden}>{overflowContent}</Overflow>
    </OverflowContext.Provider>
  );
}
