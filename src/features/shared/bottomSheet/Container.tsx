import { FunctionComponent } from 'react';

import './bottomSheet.scss';
import useBottomSheet from './hooks/useBottomSheet';

const BottomSheetContainer: FunctionComponent = () => {
  const {
    handleDefaultUserChange,
    handleCostChange,
    formattedCost,
    defaultUser,
  } = useBottomSheet();

  return (
    <div className="container">
      <div className="item-box">
        <div className="item">
          <div className="item-title">이름</div>
          <fieldset className="item-input item-radio">
            <div className="item-radio-box">
              <input
                type="radio"
                id="nameYulim"
                name="name"
                value="yulim"
                checked={defaultUser}
                onChange={handleDefaultUserChange}
              />
              <label htmlFor="nameYulim" className="add-margin-right">
                yulim
              </label>

              <input
                type="radio"
                id="nameChul"
                name="name"
                value="chul"
                checked={!defaultUser}
                onChange={handleDefaultUserChange}
              />
              <label htmlFor="nameChul">chul</label>
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
          <input
            className="item-input"
            type="text"
            value={formattedCost}
            onChange={handleCostChange}
          />
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
