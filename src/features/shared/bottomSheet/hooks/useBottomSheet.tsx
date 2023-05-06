import { useLayoutEffect, useState } from 'react';
import { ChangeEventHandler } from 'react';

const useBottomSheet = () => {
  const [defaultUser, setDefaultUser] = useState<boolean>(true);

  useLayoutEffect(() => {
    const localStorageUser = localStorage.getItem('checkeduser');
    if (localStorageUser === 'chul') {
      setDefaultUser(false);
      return;
    }
  }, []);

  const handleDefaultUserChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    if (value === 'chul') {
      setDefaultUser(false);
    } else {
      setDefaultUser(true);
    }
    localStorage.setItem('checkeduser', value);
  };

  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedDate(e.currentTarget.value);
  };

  const [statementText, setStatementText] = useState('');
  const handleStatementChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setStatementText(e.currentTarget.value);
  };

  const [memoText, setMemoText] = useState('');
  const handleMemoChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMemoText(e.currentTarget.value);
  };

  return {
    handleDefaultUserChange,
    handleDateChange,
    handleStatementChange,
    handleMemoChange,
    defaultUser,
    selectedDate,
    statementText,
    memoText,
  };
};

export default useBottomSheet;
