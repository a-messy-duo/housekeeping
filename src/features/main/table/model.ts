import { Category } from '~/features/shared/model';

export type StatementItem = {
  date: Date;
  category: Category;
  statement: string;
  memo: string;
  cost: number;
};
export type SummaryItem = Pick<StatementItem, 'category'> & {
  yulim: number;
  chul: number;
  sum: number;
  count: number;
};

export type TableItem = StatementItem | SummaryItem;
