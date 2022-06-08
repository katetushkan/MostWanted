import * as React from "react";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";

interface IProps {
  itemSize: number;
  data: any[];
  margin: number;
}

export const useVirtualizedList = <T>(itemSize: number, data: T[], margin = 0, overScroll = 3):
  [number, number, React.RefObject<HTMLDivElement>, number] => {

  const listRef = React.createRef<HTMLDivElement>();
  const [virtualHeight, setVirtualHeight] = useState(0);

  const [fromIndex, setFromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(-1)

  const height = useMemo(() => {
    return (itemSize + margin) * data.length - 2 * margin;
  }, [itemSize, margin, data])

  const handleScroll = useCallback((event: Event) => {
    if (!event.currentTarget) {
      return;
    }

    const scrollTopItem = Math.floor((event.currentTarget as HTMLElement).scrollTop / (itemSize + margin))
    const indexFrom = Math.max(scrollTopItem, scrollTopItem - overScroll);
    const indexTo = Math.min(data.length - 1, scrollTopItem + Math.floor(virtualHeight / (itemSize + margin)) + overScroll)
    setFromIndex(indexFrom);
    setToIndex(indexTo)
  }, [data.length, itemSize, margin, overScroll, virtualHeight]);

  useLayoutEffect(() => {
    if (!listRef.current) {
      return;
    }

    const element = listRef.current;

    element.addEventListener('scroll', handleScroll)

    const observer = new ResizeObserver(entries => {
      setVirtualHeight(entries[0].target.clientHeight)
      if (toIndex === -1) {
        setToIndex(Math.floor(entries[0].target.clientHeight / (itemSize + margin) + overScroll));
      }
    });

    observer.observe(listRef.current)


    return () => {
      observer.unobserve(element);
      element.removeEventListener('scroll', handleScroll)
    }
  }, [listRef, handleScroll, toIndex]);

  return [height, fromIndex, listRef, toIndex]
}
