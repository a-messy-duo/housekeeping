import { FunctionComponent } from 'react';

import useDateRow from '../hooks/useDateRow';

import { CommonProps } from './Row';

import { StatementItem } from '~/features/shared/model';

export type DateRowProps = CommonProps & StatementItem;

const DateRow: FunctionComponent<DateRowProps> = ({ date }) => {
  const { formattedDate } = useDateRow(date);

  return (
    <div className="table-row">
      <div className="table-row-item">{formattedDate}</div>
    </div>
  );
};

export default DateRow;
