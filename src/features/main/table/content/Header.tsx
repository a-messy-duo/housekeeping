import { FunctionComponent } from 'react';
import classNames from 'classnames';

import { TableContainerProps } from '../Container';

import { Our } from '~/features/shared/model';

type TableHeaderProps = Pick<
  TableContainerProps,
  'headers' | 'containerOwner' | 'type'
>;

const TableHeader: FunctionComponent<TableHeaderProps> = ({
  headers,
  containerOwner,
}) => {
  return (
    <div className="table-header">
      {headers.map((header) => {
        return (
          <div
            className={classNames('table-header-item', {
              memo: header === '메모',
              yulim: containerOwner === Our.yulim,
              chul: containerOwner === Our.chul,
            })}
            key={header}
          >
            {header}
          </div>
        );
      })}
    </div>
  );
};

export default TableHeader;
