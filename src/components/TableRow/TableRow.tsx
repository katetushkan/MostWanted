import * as React from 'react';
import clsx from 'clsx';

import './TableRow.css';


interface IProps {
  className?: string;
  fixed?: boolean;
  children: React.ReactNode;
}

const TableRow: React.FC<IProps> = ({
                                      className,
                                      fixed,
                                      children
                                    }) => {
  return (
    <tr
      className={clsx(
        'table-row',
        {
          'table-row--fixed': fixed
        },
        className
      )}
    >
      {children}
    </tr>
  );
};

export default TableRow;
