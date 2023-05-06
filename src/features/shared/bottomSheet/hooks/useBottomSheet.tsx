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

  return {
    handleDefaultUserChange,
    defaultUser,
  };
};

export default useBottomSheet;
