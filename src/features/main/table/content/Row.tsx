import { FunctionComponent } from 'react';

import { TableContainerProps } from '../Container';
import { TableItem } from '../model';

import StatementRow, { StatementRowProps } from './StatementRow';
import SummaryRow, { SummaryRowProps } from './SummaryRow';
import DateRow, { DateRowProps } from './DateRow';

export type CommonProps = Pick<TableContainerProps, 'containerOwner' | 'type'>;
type TableRowProps = CommonProps & TableItem;

const TableRow: FunctionComponent<TableRowProps> = (props) => {
  const { type } = props;

  switch (type) {
    case 'date':
      return <DateRow {...(props as DateRowProps)} />;
    case 'statement':
      return <StatementRow {...(props as StatementRowProps)} />;
    case 'summary':
      return <SummaryRow {...(props as SummaryRowProps)} />;
    default:
      return <div />;
  }
};

export default TableRow;
