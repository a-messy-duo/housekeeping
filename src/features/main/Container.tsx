import { FunctionComponent } from 'react';

import './main.scss';

import BottomSheetContainer from '../shared/bottomSheet/Container';
import { Our } from '../shared/model';

import HeaderContainer from './header/Container';
import TableContainer from './table/Container';
import { defaultStatementHeaders, defaultSummaryHeaders } from './constants';
import { dummyStatementList, dummySummaryList } from './dummy';

const MainContainer: FunctionComponent = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="content">
        <TableContainer
          type="date"
          headers={['날짜']}
          list={dummyStatementList}
        />
        <TableContainer
          type="statement"
          headers={defaultStatementHeaders}
          list={dummyStatementList}
          containerOwner={Our.yulim}
        />
        <TableContainer
          type="statement"
          headers={defaultStatementHeaders}
          list={dummyStatementList}
          containerOwner={Our.chul}
        />
        <TableContainer
          type="summary"
          headers={defaultSummaryHeaders}
          list={dummySummaryList}
        />
      </div>
      <BottomSheetContainer />
    </div>
  );
};

export default MainContainer;
