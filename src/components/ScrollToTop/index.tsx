import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    // console.log("scrolling ", pathname)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }, [pathname]);

  return <>{children}</>
};

export default ScrollToTop;