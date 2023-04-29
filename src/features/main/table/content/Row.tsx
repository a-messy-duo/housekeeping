import { FunctionComponent } from 'react';

import { TableContainerProps } from '../Container';
import { SummaryItem, TableItem } from '../model';

import { StatementItem } from '~/features/shared/model';

type CommonProps = Pick<TableContainerProps, 'hideDate'>;
type TableRowProps = CommonProps & TableItem;
type StatementRowProps = CommonProps & StatementItem;
type SummaryRowProps = CommonProps & SummaryItem;

const StatementRow: FunctionComponent<StatementRowProps> = ({
  hideDate,
  date,
  category,
  statement,
  memo,
  cost,
}) => {
  return (
    <div className="table-row">
      {!hideDate && <div className="table-row-item">{date.toString()}</div>}
      <div className="table-row-item">{category}</div>
      <div className="table-row-item">{statement}</div>
      <div className="table-row-item">{memo}</div>
      <div className="table-row-item">{cost}</div>
    </div>
  );
};

const SummaryRow: FunctionComponent<SummaryRowProps> = ({
  category,
  yulim,
  chul,
  sum,
  count,
}) => {
  return (
    <div className="table-row">
      <div className="table-row-item">{category}</div>
      <div className="table-row-item">{yulim}</div>
      <div className="table-row-item">{chul}</div>
      <div className="table-row-item">{sum}</div>
      <div className="table-row-item">{count}</div>
    </div>
  );
};

const TableRow: FunctionComponent<TableRowProps> = (props) => {
  if ((props as StatementRowProps).statement) {
    return <StatementRow {...(props as StatementRowProps)} />;
  }
  return <SummaryRow {...(props as SummaryRowProps)} />;
};

export default TableRow;
