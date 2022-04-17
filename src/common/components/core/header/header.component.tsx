import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { URL_HOME } from '../../../utility';

import './header.style';

export const Header: FC = () => {
  return (
    <Link to={URL_HOME} className="header clickable">
      <h1 className="header__title">
        <FormattedMessage defaultMessage="Welcome, baby" />
      </h1>
    </Link>
  );
};
