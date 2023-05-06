import classNames from 'classnames';
import { FunctionComponent } from 'react';

import './bottomSheet.scss';
import useBottomSheet from './hooks/useBottomSheet';
import useCategory from './hooks/useCategory';
import useCost from './hooks/useCost';

const BottomSheetContainer: FunctionComponent = () => {
  const { handleDefaultUserChange, defaultUser } = useBottomSheet();
  const { handleCostChange, cost, formattedCost } = useCost();
  const {
    handleCategoryItemClick,
    handleCategoryFocus,
    handleCategoryBlur,
    handleCategoryChange,
    categoryView,
    seletedCategory,
    categoryFilterList,
  } = useCategory();

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
          <div
            className={classNames('category-box', {
              'category-box-hide': !categoryView,
            })}
          >
            {categoryFilterList.map((category) => (
              <div key={category} onClick={handleCategoryItemClick}>
                {category}
              </div>
            ))}
          </div>
          <input
            className="item-input"
            type="text"
            value={seletedCategory}
            onFocus={handleCategoryFocus}
            onBlur={handleCategoryBlur}
            onChange={handleCategoryChange}
          />
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
