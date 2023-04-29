import { FunctionComponent } from 'react';

import { TableContainerProps } from '../Container';

type TableHeaderProps = Pick<TableContainerProps, 'headers' | 'hideDate'>;

const TableHeader: FunctionComponent<TableHeaderProps> = ({
  headers,
  hideDate,
}) => {
  return (
    <div className="table-header">
      {headers.map((header, index) => {
        if (index === 0 && hideDate) return null;
        return (
          <div className="table-header-item" key={header}>
            {header}
          </div>
        );
      })}
    </div>
  );
};

export default TableHeader;
