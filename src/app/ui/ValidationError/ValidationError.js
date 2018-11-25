import React from 'react';

import veStyles from './ValidationError.module.scss';

const ValidationError = ({ children }) => (
  <div className={veStyles.msg}>
    {children}
  </div>
);

export default ValidationError;