import { ChangeEventHandler, MouseEventHandler, useState } from 'react';

import { Category } from '../../model';
import { categoryList } from '../../constants';

const useCategory = () => {
  const [categoryView, setCategoryView] = useState<boolean>(false);
  const [seletedCategory, setSeletedCategory] = useState<string>('');

  const [categoryFilterList, setCategoryFilterList] =
    useState<Category[]>(categoryList);

  const handleCategoryItemClick: MouseEventHandler<HTMLInputElement> = (e) => {
    const selectedText = e.currentTarget.innerText;
    setSeletedCategory(selectedText);
    setCategoryView(false);
  };

  const handleCategoryFocus = () => {
    setCategoryView(true);
  };

  const handleCategoryBlur = () => {
    setCategoryView(false);
  };

  const handleCategoryChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentText = e.currentTarget.value;
    setCategoryFilterList(
      categoryList.filter((category) => category.includes(currentText)),
    );
    setSeletedCategory(currentText);
  };

  return {
    handleCategoryItemClick,
    handleCategoryFocus,
    handleCategoryBlur,
    handleCategoryChange,
    categoryView,
    seletedCategory,
    categoryFilterList,
  };
};

export default useCategory;
