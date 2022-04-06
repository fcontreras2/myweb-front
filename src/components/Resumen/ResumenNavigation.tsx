import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type RangeNavigation = { min: number; max: number | null };

const ResumenNavigation = ({ sections }: any) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [ranges, setRanges] = useState<RangeNavigation[]>([])

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    // event.preventDefault();
    setTimeout(() => {
      const { target }: any = event;
      const { hash } = target;

      const bodyRect: any = document.body.getBoundingClientRect();
      const elemRect: any = document
        .getElementById(hash.replace("#", ""))
        ?.getBoundingClientRect();
      const offset = elemRect.top - bodyRect.top;
      window.scrollTo(0, offset - 110);
    }, 100);
  };

  const checkRanges =  () => {

      const bodyRect: any = document.body.getBoundingClientRect();
      const next: RangeNavigation[] = [{ min: 0, max: null }];
      for (let index = 1; index <= sections.length; index++) {
        const elementSection = (document.getElementById("resumen-" + index) as HTMLElement);
        const offset = elementSection.getBoundingClientRect().top - bodyRect.top - 110;
        next[index - 1].max = offset- 1;
        next[index] = { min: 0, max: null };
        next[index].min = offset;
      }
      
      next[sections.length].max = document.documentElement.getBoundingClientRect().height;
      
      setRanges(next);
    
  }

  useEffect(() => {
    
    const checkScroll = () => {
      const bodyRect: DOMRect = document.body.getBoundingClientRect();
  
      const navigationIndex: number = ranges.findIndex((range, index) => {      
        return (
          Math.abs(bodyRect.top) >=  range.min - 50 &&
          Math.abs(bodyRect.top) < (range.max as number) - 50
        );
      });
      setCurrentSection(navigationIndex);
    };
    window.addEventListener("scroll", checkScroll);

    return window.removeEventListener("scroll", () => {});
  }, [ranges]);

  useEffect(() => {
    checkRanges()
  }, [sections])

  return (
    <>
      <a
        href="#resumen-0"
        className={`${
          currentSection === 0
            ? "border-l-4 border-l-primary-500 pl-4 text-primary-500"
            : "border-l-4 border-l-white pl-4"
        }`}
      >
        Personal
      </a>
      {sections.map((section: any, index: number) => (
        <a
          href={"#resumen-" + (index + 1)}
          onClick={handleClick}
          key={"#resumen-" + (index + 1)}
          className={`${
            currentSection === index + 1
              ? "border-l-4 border-l-primary-500 pl-4 text-primary-500"
              : "border-l-4 border-l-white pl-4"
          }`}
        >
          {section}
        </a>
      ))}
      {/* <a href="#1" className="border-l-4 border-l-white pl-4">
        Habilidades
      </a> */}
    </>
  );
};

export default React.memo(ResumenNavigation);
