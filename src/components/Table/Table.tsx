import * as React from 'react';
import clsx from 'clsx';

import Scroll from "../Scroll/Scroll";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
import { FixedPosition } from "../TableCell/TableCell";

import './Table.css';

export interface ITableHeaderDefinition {
  prop: string;
  label?: string;
  fixed?: FixedPosition;
  render?: (data: any) => JSX.Element;
  sortable?: boolean;
  filter?: boolean;
}

interface IProps {
  className?: string;
  data: any[];
  header: ITableHeaderDefinition[];
  fixedHeader?: boolean;
  fixedRows?: number[];
}

const Table: React.FC<IProps> = ({
                                   className,
                                   data,
                                   header,
                                   fixedHeader,
                                   fixedRows,
                                 }) => {

  return (
    <Scroll className={clsx('table_scroll', className)}>
      <table
        role="presentation"
        className="table"
      >
        <TableHeader
          header={header}
          fixed={fixedHeader}
        />
        <TableBody
          data={data}
          header={header}
          fixedRows={fixedRows}
        />
      </table>
    </Scroll>
  );
};

export default Table;
