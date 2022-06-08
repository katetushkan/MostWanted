import * as React from 'react';
import clsx from 'clsx';

import { useLayoutEffect, useMemo, useState } from 'react';
import './VirtualizedList.css';
import ListItem from "../ListItem/ListItem";


interface IProps {
  className?: string;
  data: any[];
  itemSize: number;
  margin: number
  children?: React.ReactNode;
}

const VirtualizedList: React.FC<IProps> = ({
                                             className,
                                             data,
                                             itemSize,
                                             margin
                                           }) => {

  const listRef = React.createRef<HTMLDivElement>();
  const [virtualHeight, setVirtualHeight] = useState(0)

  const overScroll = 3;
  const [fromIndex, setFromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(Math.floor(virtualHeight / (itemSize + margin) + overScroll))

  const height = useMemo(() => {
    return (itemSize + margin) * data.length - 2 * margin;
  }, [itemSize, margin, data])

  useLayoutEffect(() => {
    if (!listRef.current) {
      return;
    }

    const observer = new ResizeObserver(entries => {
      setVirtualHeight(entries[0].contentRect.height)
    });

    observer.observe(listRef.current)

    const element = listRef.current;

    return () => {
      observer.unobserve(element);
    }
  }, [listRef])

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTopItem = Math.floor(event.currentTarget.scrollTop / (itemSize + margin))
    const indexFrom = Math.max(scrollTopItem, scrollTopItem - overScroll);
    const indexTo = Math.min(data.length - 1, scrollTopItem + Math.floor(virtualHeight / (itemSize + margin)) + overScroll)
    setFromIndex(indexFrom);
    setToIndex(indexTo)
  }

  return (
    <div
      className={clsx('virtualized-list', className)}
      onScroll={handleScroll}
      ref={listRef}
    >
      <ul
        className='virtualized-list__window'
        style={{ height: height }}
      >
        {
          data?.map((item, index) =>

          (index >= fromIndex && index <= toIndex) &&
            <ListItem
                key={item}
                className="virtualized-list__item"
                top={index * (itemSize + margin)}
                height={itemSize}
            >
              {item}
            </ListItem>
        )}
      </ul>
    </div>
  );
};

export default VirtualizedList;
