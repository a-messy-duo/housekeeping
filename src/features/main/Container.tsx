import { FunctionComponent } from 'react';

import './main.scss';

import BottomSheetContainer from '../shared/bottomSheet/Container';

import HeaderContainer from './header/Container';
import TableContainer from './table/Container';
import { defaultStatementHeaders, defaultSummaryHeaders } from './constants';
import {
  dummyStatementList,
  dummyStatementList2,
  dummySummaryList,
} from './dummy';

const MainContainer: FunctionComponent = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="content">
        <TableContainer
          headers={defaultStatementHeaders}
          list={dummyStatementList}
        />
        <TableContainer
          headers={defaultStatementHeaders}
          list={dummyStatementList2}
          hideDate
        />
        <TableContainer
          headers={defaultSummaryHeaders}
          list={dummySummaryList}
        />
      </div>
      <BottomSheetContainer />
    </div>
  );
};

export default MainContainer;
