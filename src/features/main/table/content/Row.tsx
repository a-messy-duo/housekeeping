import { FunctionComponent } from 'react';

import { TableContainerProps } from '../Container';
import { TableItem } from '../model';

import StatementRow, { StatementRowProps } from './StatementRow';
import SummaryRow, { SummaryRowProps } from './SummaryRow';

export type CommonProps = Pick<TableContainerProps, 'containerOwner'>;
type TableRowProps = CommonProps & TableItem;

const TableRow: FunctionComponent<TableRowProps> = (props) => {
  if ((props as StatementRowProps).statement) {
    return <StatementRow {...(props as StatementRowProps)} />;
  }
  return <SummaryRow {...(props as SummaryRowProps)} />;
};

export default TableRow;
