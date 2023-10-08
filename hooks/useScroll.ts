"use client";

import { useEffect, useState } from "react";

const useScroll = (scrollUpEvent?: Function, scrollDownEvent?: Function) => {
  const [y, setY] = useState(0);

  const handleScroll: EventListenerOrEventListenerObject = (e) => {
    if (y > window.scrollY) {
      scrollUpEvent && scrollUpEvent(); //handle scroll up event
    } else if (y < window.scrollY) {
      scrollDownEvent && scrollDownEvent(); //handle scroll down event
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
        window.removeEventListener("scroll", handleScroll); //cleanup fn
      };
    }
  }, [y]);
};

export default useScroll;
