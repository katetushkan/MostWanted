import * as React from 'react';
import clsx from 'clsx';

import './Select.css';

interface IProps {
  className?: string;

}

const Select: React.FC<IProps> = ({ className,  }) => {
  return (
    <div className={clsx('select', className)}>

    </div>
  );
};

export default Select;
