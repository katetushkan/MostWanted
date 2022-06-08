import * as React from 'react';
import clsx from 'clsx';

import './ListItem.css';

interface IProps {
  className?: string;
  children?: React.ReactNode;
  top?: number;
  height?: number;
}

const ListItem: React.FC<IProps> = ({
                                      className,
                                      children,
                                      top,
                                      height
                                    }) => {
  return (
    <li className={clsx('list-item', className)} style={{ top: top, height: height }}>
      {children}
    </li>
  );
};

export default ListItem;
