import { useEffect, useState } from "react";

export enum Screen {
  sm = 320,
  md = 704,
  lg = 1008,
  xl = 1240,
}

const useResize = (screen: Screen = Screen.sm) => {
  
    const [isLarge, setIsLarge] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize',(e) => {
        const width = (document.documentElement as HTMLElement).offsetWidth;
        setIsLarge(width >= screen)
    });
    
    return window.removeEventListener('resize', () => {})
  },[screen]);

  return {
      isLarge
  };
};

export default useResize;
