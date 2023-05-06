import { ChangeEventHandler, useState } from 'react';

import { addCommaInNumCost, delCharInStrCost } from '../../utils/cost';

const useCost = () => {
  const [cost, setCost] = useState<number>(0);
  const [formattedCost, setFormattedCost] = useState<string>('');

  const handleCostChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const strValue = delCharInStrCost(e.target.value);
    const numValue = Number(strValue);
    const formatStrValue = addCommaInNumCost(numValue);

    setCost(numValue);
    setFormattedCost(formatStrValue);
  };

  return {
    handleCostChange,
    cost,
    formattedCost,
  };
};

export default useCost;
