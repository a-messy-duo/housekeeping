import { FunctionComponent } from 'react';

import { SummaryItem } from '../model';

import { CommonProps } from './Row';

export type SummaryRowProps = CommonProps & SummaryItem;

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

export default SummaryRow;
