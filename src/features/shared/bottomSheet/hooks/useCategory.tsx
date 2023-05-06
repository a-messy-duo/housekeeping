import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

import { Category } from '../../model';
import { categoryList } from '../../constants';

const useCategory = () => {
  const [categoryView, setCategoryView] = useState<boolean>(false);
  const [currentCategoryText, setCurrentCategoryText] = useState<string>('');
  const [categoryFilterList, setCategoryFilterList] =
    useState<Category[]>(categoryList);
  const [selectedCategory, setSelectedCategory] = useState<Category>('가구');

  useEffect(() => {
    if (currentCategoryText === '') return;
    if (categoryList.includes(currentCategoryText as Category)) {
      setSelectedCategory(currentCategoryText as Category);
    }
  }, [currentCategoryText]);

  const handleCategoryItemClick: MouseEventHandler<HTMLInputElement> = (e) => {
    const selectedText = e.currentTarget.innerText;
    setCurrentCategoryText(selectedText);
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
    setCurrentCategoryText(currentText);
  };

  return {
    handleCategoryItemClick,
    handleCategoryFocus,
    handleCategoryBlur,
    handleCategoryChange,
    categoryView,
    currentCategoryText,
    categoryFilterList,
    selectedCategory,
  };
};

export default useCategory;
