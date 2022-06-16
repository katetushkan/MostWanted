import * as React from 'react';
import clsx from 'clsx';

import './VirtualizedList.css';
import ListItem from "../ListItem/ListItem";
import { useVirtualizedList } from "./virtualizedFunctionality";
import OptionCard from "../OptionCard/OptionCard";
import Icon from "../Icon/Icon";


interface IProps {
  className?: string;
  data: any[];
  itemSize: number;
  margin: number;
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


interface IPropsOption {
  className?: string;
  data: any[];
  itemSize: number;
  margin: number;
  onChecked?: (checked: boolean, value: string) => void;
  checked: string[];
}

export const VirtualizedOptionList: React.FC<IPropsOption> = ({
                                                                className,
                                                                data,
                                                                itemSize,
                                                                margin,
                                                                onChecked,
                                                                checked
                                                              }) => {

  const [height, fromIndex, listRef, toIndex] = useVirtualizedList(itemSize, data, margin);

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
              <OptionCard
                  key={item}
                  className="virtualized-list__item"
                  top={index * (itemSize + margin)}
                  height={itemSize}
                  checked={checked.includes(item)}
                  id={item}
                  value={item}
                  icon={<Icon type="check"/>}
                  option={item}
                  onSelect={onChecked}
              />
          )}
      </ul>
    </div>
  );
};
