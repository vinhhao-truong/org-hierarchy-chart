"use client";

import { useEffect, useState } from "react";

const useScroll = (scrollUpEvent?: Function, scrollDownEvent?: Function) => {
  const [y, setY] = useState(0);

  const handleScroll: EventListenerOrEventListenerObject = (e) => {
    if (y > window.scrollY) {
      scrollUpEvent && scrollUpEvent();
    } else if (y < window.scrollY) {
      scrollDownEvent && scrollDownEvent();
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        // return a cleanup function to unregister our function since it will run multiple times
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [y]);
};

export default useScroll;
