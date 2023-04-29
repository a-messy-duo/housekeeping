import { Our } from '../shared/model';

import { TableItem } from './table/model';

export const dummyStatementList: TableItem[] = [
  {
    date: new Date('2023-02-01'),
    category: '외식',
    statement: '바른치킨',
    memo: '여기 존맛이었음',
    cost: 20000,
    owner: Our.yulim,
  },
  {
    date: new Date('2023-02-02'),
    category: '외식',
    statement: '피자헛',
    memo: '여기 맛이 진짜 헛이었음',
    cost: 45000,
    owner: Our.yulim,
  },
];

export const dummyStatementList2: TableItem[] = [
  {
    date: new Date('2023-02-02'),
    category: '외식',
    statement: '마라탕',
    memo: '말아먹지마세요',
    cost: 10000,
    owner: Our.chul,
  },
  {
    date: new Date('2023-02-03'),
    category: '외식',
    statement: '쌀국수',
    memo: '',
    cost: 4500,
    owner: Our.chul,
  },
];

export const dummySummaryList: TableItem[] = [
  {
    category: '외식',
    yulim: 65000,
    chul: 20000,
    sum: 14500,
    count: 2,
  },
];
