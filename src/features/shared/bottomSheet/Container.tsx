import { FunctionComponent } from 'react';

import './bottomSheet.scss';

const BottomSheetContainer: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="itemBox">
        <div className="item">
          <div className="itemTitle">이름</div>
          <fieldset className="itemInput itemRadio">
            <div className="itemRadioBox">
              <input type="radio" id="nameY" name="name" value="Y" checked />
              <label htmlFor="nameY" className="addMarginRight">
                Y
              </label>

              <input type="radio" id="nameC" name="name" value="C" />
              <label htmlFor="nameC">C</label>
            </div>
          </fieldset>
        </div>
        <div className="item">
          <div className="itemTitle">날짜</div>
          <input className="itemInput" type="date" />
        </div>
        <div className="item">
          <div className="itemTitle">구분</div>
          <input className="itemInput" type="text" />
        </div>
        <div className="item">
          <div className="itemTitle">내역</div>
          <input className="itemInput" type="text" />
        </div>
        <div className="item">
          <div className="itemTitle">금액</div>
          <input className="itemInput" type="number" />
        </div>
        <div className="item">
          <div className="itemTitle">메모</div>
          <input className="itemInput" type="text" />
        </div>
      </div>
      <button className="addBtn">추가</button>
    </div>
  );
};

export default BottomSheetContainer;
