import { StatementItem } from '../../model';

const useAddItem = () => {
  const handleAddButtonClick = (obj: StatementItem) => {
    // {
    //   owner,
    //   date,
    //   category,
    //   statement,
    //   cost,
    //   memo,
    // }
    console.log(obj);
  };

  return {
    handleAddButtonClick,
  };
};

export default useAddItem;
