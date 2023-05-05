import { useLayoutEffect, useState } from 'react';
import { ChangeEventHandler } from 'react';

import { addCommaInNumCost, delCharInStrCost } from '../../utils/cost';

const useBottomSheet = () => {
  const [cost, setCost] = useState<number>(0);
  const [formattedCost, setFormattedCost] = useState<string>('');
  const [defaultUser, setDefaultUser] = useState<boolean>(true);

  useLayoutEffect(() => {
    const localStorageUser = localStorage.getItem('checkeduser');
    if (localStorageUser === 'chul') {
      setDefaultUser(false);
      return;
    }
  }, []);

  const handleCostChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const strValue = delCharInStrCost(e.target.value);
    const numValue = Number(strValue);
    const formatStrValue = addCommaInNumCost(numValue);

    setCost(numValue);
    setFormattedCost(formatStrValue);
  };

  const handleDefaultUserChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    if (value === 'chul') {
      setDefaultUser(false);
    } else {
      setDefaultUser(true);
    }
    localStorage.setItem('checkeduser', value);
  };

  return {
    handleCostChange,
    handleDefaultUserChange,
    formattedCost,
    defaultUser,
  };
};

export default useBottomSheet;
