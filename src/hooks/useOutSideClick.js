import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        e.stopPropagation();
        handler();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return { ref };
}
