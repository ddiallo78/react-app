import React from 'react';
import { FormattedMessage } from 'react-intl';
import ContainedButtons from './boutton';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <ContainedButtons />
      <NavBar>
        <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
        <HeaderLink to="/accueil">
          <FormattedMessage {...messages.connexion} />
        </HeaderLink>
      </NavBar>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
    </div>
  );
}

export default Header;
