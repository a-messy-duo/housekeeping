import { FunctionComponent } from 'react';

import { CommonProps } from './Row';

import { Our, StatementItem } from '~/features/shared/model';

export type StatementRowProps = CommonProps & StatementItem;

const StatementRowSkeleton: FunctionComponent<StatementRowProps> = ({
  containerOwner,
}) => {
  return (
    <div className="table-row">
      {containerOwner === Our.yulim && <div className="table-row-item" />}
      <div className="table-row-item" />
      <div className="table-row-item" />
      <div className="table-row-item" />
      <div className="table-row-item" />
    </div>
  );
};

const StatementRow: FunctionComponent<StatementRowProps> = (props) => {
  const { owner, containerOwner, date, category, statement, memo, cost } =
    props;
  if (containerOwner !== owner) {
    return <StatementRowSkeleton {...props} />;
  }

  return (
    <div className="table-row">
      {owner === Our.yulim && (
        <div className="table-row-item">{date.toString()}</div>
      )}
      <div className="table-row-item">{category}</div>
      <div className="table-row-item">{statement}</div>
      <div className="table-row-item">{memo}</div>
      <div className="table-row-item">{cost}</div>
    </div>
  );
};

export default StatementRow;
