import * as React from 'react';
import clsx from 'clsx';

import './Scroll.css';

interface IProps {
  className?: string,
  children: React.ReactNode
}

const Scroll: React.FC<IProps> = ({ className, children }) => {
  return (
    <div className={clsx('scroll', className)}>
      {children}
    </div>
  );
};

export default Scroll;
