import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "src/context/smooth-scroll"; 

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Ensure lenis is ready before scrolling
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native scroll if lenis is not available
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}
