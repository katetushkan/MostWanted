import { useEffect } from "react";
import * as React from "react";

export const useFocus = (focusChangedCallback?: (value: boolean) => void) => {
  const element = React.createRef<HTMLElement>();

  useEffect(()=>{
    const handleClickOutside = (event: any) => {

      if (element.current && element.current.contains(event.target)) {
        if (focusChangedCallback) {
          focusChangedCallback(true)
        }
        return;
      }
      else {
        if (focusChangedCallback) {
          focusChangedCallback(false);
        }
      }
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [element, focusChangedCallback])

  return element;
}
