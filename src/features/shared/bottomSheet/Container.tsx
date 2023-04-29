import { FunctionComponent, useLayoutEffect, useState } from 'react';
import {
  KeyboardEventHandler,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';

import './bottomSheet.scss';

const BottomSheetContainer: FunctionComponent = () => {
  const [cost, setCost] = useState<string>('0');
  const [defaultUser, setDefaultUser] = useState<boolean>(true);

  useLayoutEffect(() => {
    const localStorageUser = localStorage.getItem('housekeeping-checkeduser');
    if (localStorageUser === 'chul') {
      setDefaultUser(false);
      return;
    }
  }, []);

  const handleCostChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
    setCost(value);
  };

  const handleCostKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const value = Number(e.currentTarget.value.replaceAll(',', ''));
    const formatValue = value.toLocaleString('ko-KR');
    setCost(formatValue);
  };

  const handleInputClick: MouseEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;

    if (value === 'chul') {
      setDefaultUser(false);
    } else {
      setDefaultUser(true);
    }

    localStorage.setItem('housekeeping-checkeduser', value);
  };

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
                onClick={handleInputClick}
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
                onClick={handleInputClick}
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
            value={cost}
            onChange={handleCostChange}
            onKeyUp={handleCostKeyUp}
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
