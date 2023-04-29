import { FunctionComponent } from 'react';

import './table.scss';

import TableHeader from './content/Header';
import { TableItem, TableType } from './model';
import TableRow from './content/Row';

import { Our } from '~/features/shared/model';

export type TableContainerProps = {
  type: TableType;
  headers: string[];
  list: TableItem[];
  containerOwner?: Our;
};

const TableContainer: FunctionComponent<TableContainerProps> = (props) => {
  const { list } = props;

  return (
    <div className="table">
      <TableHeader {...props} />
      <div className="table-row-container">
        {list.map((item, index) => (
          <TableRow key={item.category + index} {...props} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TableContainer;
