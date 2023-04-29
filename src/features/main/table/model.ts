import { Our, StatementItem } from '~/features/shared/model';

export type SummaryItem = Pick<StatementItem, 'category'> & {
  [Our.yulim]: number;
  [Our.chul]: number;
  sum: number;
  count: number;
};

export type TableItem = StatementItem | SummaryItem;
