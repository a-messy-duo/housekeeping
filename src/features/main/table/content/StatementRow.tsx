import { FunctionComponent } from 'react';
import classNames from 'classnames';

import { CommonProps } from './Row';

import { Our, StatementItem } from '~/features/shared/model';

export type StatementRowProps = CommonProps & StatementItem;

const StatementRow: FunctionComponent<StatementRowProps> = ({
  owner,
  containerOwner,
  category,
  statement,
  memo,
  cost,
}) => {
  const isMine = containerOwner === owner;

  return (
    <div
      className={classNames('table-row', {
        yulim: containerOwner === Our.yulim,
        chul: containerOwner === Our.chul,
      })}
    >
      <div className="table-row-item">{isMine ? category : ''}</div>
      <div className="table-row-item">{isMine ? statement : ''}</div>
      <div className="table-row-item memo">{isMine ? memo : ''}</div>
      <div className="table-row-item">{isMine ? cost : ''}</div>
    </div>
  );
};

export default StatementRow;
