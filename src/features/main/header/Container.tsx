import {
  ChangeEventHandler,
  FunctionComponent,
  useLayoutEffect,
  useState,
} from 'react';

import './header.scss';
import { padToDigits } from '~/features/shared/utils/date';

const HeaderContainer: FunctionComponent = () => {
  // TODO: move to atom
  const [date, setDate] = useState('');

  useLayoutEffect(() => {
    const d = new Date();
    const value = `${d.getFullYear()}-${padToDigits(d.getMonth() + 1)}`;
    setDate(value);
  }, []);

  const handleCalendarChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <input
        className="header-date"
        type="month"
        min="2023-01"
        value={date}
        onChange={handleCalendarChange}
      />
      <input type="text" placeholder="search" />
    </>
  );
};

export default HeaderContainer;
