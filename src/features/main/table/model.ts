import { Our, StatementItem } from '~/features/shared/model';

export type TableType = 'date' | 'statement' | 'summary';

export type SummaryItem = Pick<StatementItem, 'category'> & {
  [Our.yulim]: number;
  [Our.chul]: number;
  sum: number;
  count: number;
};

export type TableItem = StatementItem | SummaryItem;
