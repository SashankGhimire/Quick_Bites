import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch (e) {
      // fallback
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;
