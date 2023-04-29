import { FunctionComponent } from 'react';

import './bottomSheet.scss';

const BottomSheetContainer: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="item-box">
        <div className="item">
          <div className="item-title">이름</div>
          <fieldset className="item-input item-radio">
            <div className="item-radio-box">
              <input type="radio" id="nameY" name="name" value="Y" checked />
              <label htmlFor="nameY" className="add-margin-right">
                Y
              </label>

              <input type="radio" id="nameC" name="name" value="C" />
              <label htmlFor="nameC">C</label>
            </div>
          </fieldset>
        </div>
        <div className="item">
          <div className="item-title">날짜</div>
          <input className="item-input" type="date" />
        </div>
        <div className="item">
          <div className="item-title">구분</div>
          <input className="item-input" type="text" />
        </div>
        <div className="item">
          <div className="item-title">내역</div>
          <input className="item-input" type="text" />
        </div>
        <div className="item">
          <div className="item-title">금액</div>
          <input className="item-input" type="number" />
        </div>
        <div className="item">
          <div className="item-title">메모</div>
          <input className="item-input" type="text" />
        </div>
      </div>
      <button className="add-btn">추가</button>
    </div>
  );
};

export default BottomSheetContainer;
