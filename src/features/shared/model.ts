export type Category =
  | '가구'
  | '경조사'
  | '공연'
  | '관리비'
  | '교통'
  | '기념품'
  | '냥'
  | '도서'
  | '배달'
  | '생필품'
  | '섹필품'
  | '술'
  | '식료품'
  | '악기'
  | '외식'
  | '의류'
  | '의약품'
  | '이사'
  | '잡화'
  | '취미'
  | '카페'
  | '통신비'
  | '화장품'
  | '여행';

export enum Our {
  yulim = 'yulim',
  chul = 'chul',
}

export type StatementItem = {
  date: Date;
  category: Category;
  statement: string;
  memo: string;
  cost: number;
  owner: Our;
};
