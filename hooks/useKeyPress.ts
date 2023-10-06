"use client";
import { useEffect } from "react";

const useKeyPress = (key: string, pressEvent: Function) => {
  const escapeHandler = (e: KeyboardEvent) => {
    if (e.key === key) {
      pressEvent();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeHandler);
    return () => {
      document.removeEventListener("keydown", escapeHandler, false);
    };
  }, []);
};

export default useKeyPress;
