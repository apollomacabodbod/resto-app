import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // const lenis = new Lenis({
    //   duration: 1.5,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // });
    // lenisRef.current = lenis;

    // function raf(time: DOMHighResTimeStamp) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }
    // requestAnimationFrame(raf);

    // return () => lenis.destroy();


    const lenis = new Lenis({
      duration: 1.5, // Controls the smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    lenisRef.current = lenis;
      
    // RAF loop for continuous smooth scroll
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
      
    requestAnimationFrame(raf);
      
    // Cleanup function to destroy Lenis on unmount
    return () => lenis.destroy();


  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);