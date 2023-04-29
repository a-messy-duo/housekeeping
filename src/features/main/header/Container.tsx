import { FunctionComponent } from 'react';

const HeaderContainer: FunctionComponent = () => {
  return (
    <>
      <input type="date" min="2023-01-01" />
      <input type="text" placeholder="search" />
    </>
  );
};

export default HeaderContainer;
