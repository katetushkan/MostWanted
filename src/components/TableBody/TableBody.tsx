import * as React from 'react';
import clsx from 'clsx';

import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";
import { ITableHeaderDefinition } from "../Table/Table";

import './TableBody.css';

interface IProps {
  className?: string;
  data: any[];
  header: ITableHeaderDefinition[];
  fixedRows?: number[];
}

const TableBody: React.FC<IProps> = ({
                                       className,
                                       data,
                                       header,
                                       fixedRows
                                     }) => {

  return (
    <tbody className={clsx('table-body', className)}>
    {
      data.map((item) => (
          <TableRow
            key={item.id}
            fixed={fixedRows && fixedRows.includes(item.id)}
          >
            {
              header.map(header =>
                <TableCell
                  key={`${item.id}-${header.prop}`}
                  type="data"
                  fixed={header.fixed}
                >
                  {header.render ? header.render(item[header.prop]) : item[header.prop]}
                </TableCell>
              )
            }
          </TableRow>
        )
      )
    }
    </tbody>
  );
};

export default TableBody;
