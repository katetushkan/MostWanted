import * as React from 'react';
import clsx from 'clsx';

import TableCell from "../TableCell/TableCell";
import TableRow from "../TableRow/TableRow";
import { ITableHeaderDefinition } from "../Table/Table";

import './TableHeader.css';


interface IProps {
  className?: string;
  header: ITableHeaderDefinition[];
  fixed?: boolean;
}

const TableHeader: React.FC<IProps> = ({
                                         className,
                                         header,
                                         fixed
                                       }) => {

  return (
    <thead className={clsx('header', className)}>
      <TableRow fixed={fixed}>
        {
          header.map((header) =>
            <TableCell
              key={header.prop}
              type="header"
              fixed={header.fixed}
            >
              {header.label ?? header.prop}
            </TableCell>
          )
        }
      </TableRow>
    </thead>
  );
};

export default TableHeader;
