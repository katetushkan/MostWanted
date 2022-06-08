import * as React from 'react';
import clsx from 'clsx';

import './VirtualizedList.css';
import ListItem from "../ListItem/ListItem";
import { useVirtualizedList } from "./virtualizedFunctionality";


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

  const [height, fromIndex, listRef, toIndex] = useVirtualizedList(itemSize, data, margin)

  return (
    <div
      className={clsx('virtualized-list', className)}
      ref={listRef}
    >
      <ul
        className='virtualized-list__window'
        style={{ height }}
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
