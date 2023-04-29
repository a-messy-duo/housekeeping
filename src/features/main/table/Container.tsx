import { FunctionComponent } from 'react';

import './table.scss';

import TableHeader from './content/Header';
import { TableItem } from './model';
import TableRow from './content/Row';

export type TableContainerProps = {
  headers: string[];
  list: TableItem[];
  hideDate?: boolean;
};

const TableContainer: FunctionComponent<TableContainerProps> = (props) => {
  const { list } = props;

  return (
    <div className="table">
      <TableHeader {...props} />
      <div className="table-row-container">
        {list.map((item) => (
          <TableRow {...props} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TableContainer;
