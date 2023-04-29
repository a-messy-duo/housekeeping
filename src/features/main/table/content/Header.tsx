import { FunctionComponent } from 'react';

import { TableContainerProps } from '../Container';

import { Our } from '~/features/shared/model';

type TableHeaderProps = Pick<TableContainerProps, 'headers' | 'containerOwner'>;

const TableHeader: FunctionComponent<TableHeaderProps> = ({
  headers,
  containerOwner,
}) => {
  return (
    <div className="table-header">
      {headers.map((header, index) => {
        if (containerOwner && index === 0 && containerOwner !== Our.yulim)
          return null;
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
