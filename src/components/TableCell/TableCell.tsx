import * as React from 'react';
import clsx from 'clsx';

import './TableCell.css';

export type FixedPosition = "left" | "right";

const cellTypes = {
  data: "data",
  header: "header"
}

interface IProps {
  className?: string;
  type?: keyof typeof cellTypes;
  fixed?: FixedPosition;
  children: React.ReactNode;
}

const TableCell: React.FC<IProps> = ({
                                       className,
                                       type,
                                       fixed,
                                       children
                                     }) => {

  return (
    <>
      {
        type === 'header' ?
          <th
            scope="col"
            className={clsx(
              "table-cell",
              "table-cell--header",
              {
                "table-cell--fixed table-cell--fixed-left": fixed === "left",
                "table-cell--fixed table-cell--fixed-right": fixed === "right",
              },
              className
            )}>
            {children}
          </th>
          :
          <td
            className={clsx(
              'table-cell',
              "table-cell--data",
              {
                "table-cell--fixed table-cell--fixed-left": fixed === "left",
                "table-cell--fixed table-cell--fixed-right": fixed === "right",
              })}>
            {children}
          </td>
      }
    </>
  );
};

export default TableCell;
