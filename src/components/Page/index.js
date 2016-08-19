import React from 'react';
import css from './styles.css';

const Page = ({ children }) => {
  return (
    <div className={css.page}>
      {children}
    </div>
  );
};

export default Page;
