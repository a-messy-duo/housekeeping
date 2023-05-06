import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { Our } from '../model';

import './bottomSheet.scss';
import useAddItem from './hooks/useAddItem';
import useBottomSheet from './hooks/useBottomSheet';
import useCategory from './hooks/useCategory';
import useCost from './hooks/useCost';

const BottomSheetContainer: FunctionComponent = () => {
  const {
    handleDefaultUserChange,
    handleDateChange,
    handleStatementChange,
    handleMemoChange,
    defaultUser,
    selectedDate,
    statementText,
    memoText,
  } = useBottomSheet();
  const { handleCostChange, cost, formattedCost } = useCost();
  const {
    handleCategoryItemClick,
    handleCategoryFocus,
    handleCategoryBlur,
    handleCategoryChange,
    categoryView,
    currentCategoryText,
    categoryFilterList,
    selectedCategory,
  } = useCategory();
  const { handleAddButtonClick } = useAddItem();

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
          <input
            className="item-input"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
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
            value={currentCategoryText}
            onFocus={handleCategoryFocus}
            onBlur={handleCategoryBlur}
            onChange={handleCategoryChange}
          />
        </div>

        <div className="item">
          <div className="item-title">내역</div>
          <input
            className="item-input"
            type="text"
            value={statementText}
            onChange={handleStatementChange}
          />
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
          <input
            className="item-input"
            type="text"
            value={memoText}
            onChange={handleMemoChange}
          />
        </div>
      </div>

      <button
        className="add-btn"
        onClick={() =>
          handleAddButtonClick({
            owner: defaultUser ? Our.yulim : Our.chul,
            date: new Date(selectedDate),
            category: selectedCategory,
            statement: statementText,
            cost: cost,
            memo: memoText,
          })
        }
      >
        추가
      </button>
    </div>
  );
};

export default BottomSheetContainer;
