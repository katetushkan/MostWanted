import * as React from 'react';
import clsx from 'clsx';

import ListItem from "../ListItem/ListItem";
import './List.css';

interface IProps {
  className?: string;
  data?: any[];
  height?: number;
  itemSize?: number;
}

const List: React.FC<IProps> = ({ className, data }) => {
  return (
    <ul className={clsx('list', className)}>
      {data?.map(item => <ListItem key={item} className="list__list-item">{item}</ListItem>)}
    </ul>
  );
};

export default List;

